<template>
	<view class="content">
		<!-- <view class="navbar" :style="{position:headerPosition,top:headerTop}">
			<view class="nav-item" id="brand" :class="{current: filterIndex === 0}" @click="toggleCateMask5('show')">
				{{brand}}
			</view>
			<view class="nav-item" id="state" :class="{current: filterIndex === 1}" @click="toggleCateMask1('show')">
				{{state}}
			</view>
			<view class="nav-item" id="sort" :class="{current: filterIndex === 2}" @click="toggleCateMask2('show')">
				{{sort}}
			</view>
		</view> -->
		<view class="goods-list">
			<view 
				v-for="(item, index) in goodsList" :key="index"
				class="goods-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.image[0]" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.brand}}{{item.brand1}}{{item.brandchexin}}</text>
				<view class="price-box">
					<text class="price">{{item.new_car_price}}万</text>
					<text>已售 0</text>
				</view>
			</view>
		</view>
		<uni-load-more :status="loadingType"></uni-load-more>
		
		<!-- 品牌 -->
		<view class="cate-mask" style="font-size: 10px;" :class="cateMaskState5===0 ? 'none' : cateMaskState5===1 ? 'show' : ''" @click="toggleCateMask5">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
							<view v-for="(item,index) in cateList3" :key="index">
								<view class="yt-list-cell b-b">{{index}}</view>
								<view v-for="(month,monthIndex) in cateList3[index]">
											<view class="yt-list-cell b-b" @click="uplevel(month.id,month.brand_name,1,'show')"><img :src="month.brand_logo" style="width: 15px;height: 15px;"/>{{month.brand_name}}</view>
								</view>
							</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="cate-mask" style="width: 430px;font-size: 10px;" :class="cateMaskState6===0 ? 'none' : cateMaskState6===1 ? 'show' : ''" @click="toggleCateMask6">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
							<view v-for="(item,index) in cateList4" :key="index">
								<view class="yt-list-cell b-b" @click="uplevel(item.id,item.name,2,'show')">{{item.name}}</view>
							</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="cate-mask" style="width: 500px;font-size: 10px;" :class="cateMaskState7===0 ? 'none' : cateMaskState7===1 ? 'show' : ''" @click="toggleCateMask7">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
							<view v-for="(item,index) in cateList5" :key="index">
								<view class="yt-list-cell b-b" @click="changesub2(item.id,item.name)">{{item.name}}</view>
							</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- //状态 -->
		<view class="cate-mask" :class="cateMaskState1===0 ? 'none' : cateMaskState1===1 ? 'show' : ''" @click="toggleCateMask1">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
					<view v-for="item in cateList1" :key="item.id">
						<view class="cate-item b-b two">{{item.name}}</view>
						<view 
							v-for="tItem in item.child" :key="tItem.id" 
							class="cate-item b-b" 
							:class="{active: tItem.id==cateId}"
							@click="changeCate1(tItem)">
							{{tItem.name}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- //排序 -->
		<view class="cate-mask" :class="cateMaskState2===0 ? 'none' : cateMaskState2===1 ? 'show' : ''" @click="toggleCateMask2">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
					<view v-for="item in cateList2" :key="item.id">
						<view class="cate-item b-b two">{{item.name}}</view>
						<view 
							v-for="tItem in item.child" :key="tItem.id" 
							class="cate-item b-b" 
							:class="{active: tItem.id==cateId}"
							@click="changeCate2(tItem)">
							{{tItem.name}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore	
		},
		data() {
			return {
				cateMaskState: 0, //分类面板展开状态
				cateMaskState1: 0, 
				cateMaskState2: 0, 
				headerPosition:"fixed",
				headerTop:"0px",
				loadingType: 'more', //加载更多状态
				filterIndex: 0, 
				cateId: 0, //已选三级分类id
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				cateList: [],
				cateList1: [],
				cateList2: [],
				goodsList: [],
				brand:'品牌',
				state:'状态',
				sort:'排序',
				userinfo:{
					
				},
				cateList3:[],
				cateMaskState5:0,
				cateList4:[],
				cateMaskState6:0,
				cateList5:[],
				cateMaskState7:0,
				brand_id_one:'',
				brand_title_one:'',
				brand_id_two:'',
				brand_title_two:'',
				brand_id_three:'',
				brand_title_three:'',
				page:1
			};
		},
		
		onLoad(options){
			// #ifdef H5
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			// #endif
			this.cateId = options.tid;
			this.loadCateList3();
			this.loadCateList1(options.fid,options.sid);
			this.loadCateList2(options.fid,options.sid);
			this.loadData();
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			// uni.redirectTo({
			// 	url:'/pages/car/list'
			// })
			this.page=1;
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom(){
			this.page=this.page+1;
			this.loadData();
		},
		methods: {
			//加载分类
			async loadCateList3(){
				var _self = this;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car-brand/index', 
					data: {
						"access-token":this.userinfo.access_token
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							_self.cateList3=res.data.data;
							console.log("cateList3"+_self.cateList3)
						}else{
							if(res.data.code=== 401){
								uni.navigateTo({
									url: `/pages/public/login`
								})
							}else{
							
							}
						}
					}
				});
			},
			uplevel(id,title,level,type){
				var _self = this;
				if(level==1){
					_self.brand_id_one=id;
					_self.brand_title_one=title;
					uni.request({
						url: 'http://dg.51jump.cn/merapi/v1/car/car-brand/index', 
						data: {
							"access-token":this.userinfo.access_token,
							"brandid":id
						},
						method:"get",
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: function (res) {
							if(res.data.code=== 200){
								_self.cateList4=res.data.data;
								console.log("cateList4"+_self.cateList4)
								if(type==='show'){
								_self.cateMaskState6 = 1;
								}else{
									_self.cateMaskState6 = 0;
								}
							}else{
								if(res.data.code=== 401){
									uni.navigateTo({
										url: `/pages/public/login`
									})
								}else{
								
								}
							}
						}
					});
				}else if(level==2){
					_self.brand_id_two=id;
					_self.brand_title_two=title;
					uni.request({
						url: 'http://dg.51jump.cn/merapi/v1/car/car-brand/index', 
						data: {
							"access-token":this.userinfo.access_token,
							"series_id":id
						},
						method:"get",
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: function (res) {
							if(res.data.code=== 200){
								_self.cateList5=res.data.data;
								console.log("cateList5"+_self.cateList5)
								if(type==='show'){
								_self.cateMaskState7 = 1;
								}else{
									_self.cateMaskState7 = 0;
								}
							}else{
								if(res.data.code=== 401){
									uni.navigateTo({
										url: `/pages/public/login`
									})
								}else{
							
								}
							}
						}
					});
				}
			},
			changesub2(id,title){
				var _self = this;
				_self.brand_id_three=id;
				_self.brand_title_three=title;
				_self.cateMaskState5=0;
				_self.cateMaskState6=0;
				_self.cateMaskState7=0;
				console.log("品牌"+_self.brand_title_one+_self.brand_title_two+_self.brand_title_three)
			},
			// async loadCateList(fid, sid){
			// 	let list = await this.$api.json('cateList');
			// 	let cateList = list.filter(item=>item.pid == fid);
				
			// 	cateList.forEach(item=>{
			// 		let tempList = list.filter(val=>val.pid == item.id);
			// 		item.child = tempList;
			// 	})
			// 	this.cateList = cateList;
			// },
			async loadCateList1(fid, sid){	
				let list = await this.$api.json('cateList1');
				let cateList = list.filter(item=>item.pid == fid);
				
				cateList.forEach(item=>{
					let tempList = list.filter(val=>val.pid == item.id);
					item.child = tempList;
				})
				this.cateList1 = cateList;
			},
			async loadCateList2(fid, sid){
				let list = await this.$api.json('cateList2');
				let cateList = list.filter(item=>item.pid == fid);
				
				cateList.forEach(item=>{
					let tempList = list.filter(val=>val.pid == item.id);
					item.child = tempList;
				})
				this.cateList2 = cateList;
			},
			//加载商品 ，带下拉刷新和上滑加载
			async loadData(type='add', loading) {
				//没有更多直接返回
				if(type === 'add'){
					if(this.loadingType === 'nomore'){
						return;
					}
					this.loadingType = 'loading';
				}else{
					this.loadingType = 'more'
				}
				
				const userinfo = uni.getStorageSync('userinfo');
				var _self=this;
				_self.userinfo=userinfo;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car/index', 
					data: {
						"access-token":userinfo.access_token,
						"page":this.page,
						"pagesize":6
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							console.log('1111'+res.data);
							if(_self.page==1){
								_self.goodsList=res.data.data;
							}else{
								_self.goodsList=_self.goodsList.concat(res.data.data);
							}
						}else{
							if(res.data.code=== 401){
								uni.navigateTo({
									url: `/pages/public/login`
								})
							}else{
						
							}
						}
					}
				});
				
				//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
				this.loadingType  = this.goodsList.length > 6 ? 'nomore' : 'more';
				if(type === 'refresh'){
					if(loading == 1){
						uni.hideLoading()
					}else{
						uni.stopPullDownRefresh();
					}
				}
			},
			//筛选点击
			tabClick(index){
				if(this.filterIndex === index && index !== 2){
					return;
				}
				this.filterIndex = index;
				this.priceOrder = 0;
			},
			//显示分类面板
			toggleCateMask5(type){
				this.loadCateList3();
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState5 = 2;
				setTimeout(()=>{
					this.cateMaskState5 = state;
				}, timer)
			},
			toggleCateMask6(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState6 = 2;
				setTimeout(()=>{
					this.cateMaskState6 = state;
				}, timer)
			},
			toggleCateMask7(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState7 = 2;
				setTimeout(()=>{
					this.cateMaskState7 = state;
				}, timer)
			},
			toggleCateMask1(type){
				this.tabClick(1);
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState = 2;
				setTimeout(()=>{
					this.cateMaskState1 = state;
					this.cateMaskState = 0;
					this.cateMaskState2 = 0;
				}, timer)
			},
			toggleCateMask2(type){
				this.tabClick(2);
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState = 2;
				setTimeout(()=>{
					this.cateMaskState2 = state;
					this.cateMaskState = 0;
					this.cateMaskState1 = 0;
				}, timer)
			},
			//分类点击
			changeCate(item){
				this.tabClick(0);
				this.brand=item.name;
				this.cateId = item.id;
				this.toggleCateMask();
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			changeCate1(item){
				this.tabClick(1);
				this.state=item.name;
				this.cateId = item.id;
				this.toggleCateMask1();
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			changeCate2(item){
				this.tabClick(2);
				this.sort=item.name;
				this.cateId = item.id;
				this.toggleCateMask2();
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//详情
			navToDetailPage(item){
				//测试数据没有写id，用title代替
				let id = item.id;
				uni.navigateTo({
					url: `/pages/car/product?id=${id}`
				})
			},
			stopPrevent(){}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
	}
	.content{
		padding-top: 96upx;
	}

	.navbar{
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0,0,0,.06);
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: $base-color;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120upx;
					height: 0;
					border-bottom: 4upx solid $base-color;
				}
			}
		}
		.p-box{
			display: flex;
			flex-direction: column;
			.yticon{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: #888;
				&.active{
					color: $base-color;
				}
			}
			.xia{
				transform: scaleY(-1);
			}
		}
		.cate-item{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36upx;
			}
		}
	}

	/* 分类 */
	.cate-mask{
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 95;
		transition: .3s;
		
		.cate-content{
			width: 630upx;
			height: 100%;
			background: #fff;
			float:right;
			transform: translateX(100%);
			transition: .3s;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.cate-content{
				transform: translateX(0);
			}
		}
	}
	.cate-list{
		display: flex;
		flex-direction: column;
		height: 100%;
		.cate-item{
			display: flex;
			align-items: center;
			height: 90upx;
			padding-left: 30upx;
 			font-size: 28upx;
			color: #555;
			position: relative;
		}
		.two{
			height: 64upx;
			color: #303133;
			font-size: 30upx;
			background: #f8f8f8;
		}
		.active{
			color: $base-color;
		}
	}

	/* 商品列表 */
	.goods-list{
		margin-top: -20px;
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.goods-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
		}
		.price-box{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-right: 10upx;
			font-size: 24upx;
			color: $font-color-light;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
			&:before{
				content: '￥';
				font-size: 26upx;
			}
		}
	}
	
	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 30upx 10upx 40upx;
		line-height: 70upx;
		position: relative;
	
		&.cell-hover {
			background: #fafafa;
		}
	
		&.b-b:after {
			left: 30upx;
		}
	
		.cell-icon {
			height: 32upx;
			width: 32upx;
			font-size: 22upx;
			color: #fff;
			text-align: center;
			line-height: 32upx;
			background: #f85e52;
			border-radius: 4upx;
			margin-right: 12upx;
	
			&.hb {
				background: #ffaa0e;
			}
	
			&.lpk {
				background: #3ab54a;
			}
	
		}
	
		.cell-more {
			align-self: center;
			font-size: 24upx;
			color: $font-color-light;
			margin-left: 8upx;
			margin-right: -10upx;
		}
	
		.cell-tit {
			flex: 1;
			font-size: 26upx;
			color: #303133;
			margin-right: 10upx;
			font-weight: bold;
			margin-right: -140px;
		}
	
		.cell-tip {
			font-size: 26upx;
			color: $font-color-dark;
				
			&.disabled {
				color: $font-color-light;
			}
	
			&.active {
				color: $base-color;
			}
			&.red{
				color: $base-color;
			}
		}
	
		&.desc-cell {
			.cell-tit {
				max-width: 90upx;
			}
		}
	
		.desc {
			flex: 1;
			font-size: $font-base;
			color: $font-color-dark;
		}
	}
	

</style>
