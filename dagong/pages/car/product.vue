<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in carinfo.image" :key="index">
					<view class="image-wrapper">
						<image
							:src="item" 
							:data-src="item"
							class="loaded" 
							mode="aspectFill"
							@tap="previewImage(index)"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="introduce-section">
			<text class="title">{{carinfo.brand}}{{carinfo.brand1}}{{carinfo.brand_chexing}}</text>
			<view class="bot-row">
				<text>{{carinfo.production_date}}</text>
				<text>{{carinfo.kilometre}}万公里</text>
				<!-- <text>国v</text> -->
				<text>库龄{{carinfo.warning_days}}天</text>
			</view>
			<view class="price-box">
				<!-- <text class="price-tip">¥</text> -->
				<text class="price">{{carinfo.new_car_price}}万</text>
				<!-- <text class="m-price">¥488万</text>
				<text class="coupon-tip">7折</text> -->
			</view>
			<view class="bot-row">
				<text>新车价：14.68万+1.25万购置税，省2.93万</text>
			</view>
		</view>
		
		<!--  分享 -->
		<!-- <view class="share-section" @click="share">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				 返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>
			
		</view> -->
		
		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec(1)">
				<text class="tit" style="font-weight:bold;">基本信息</text>
				<view class="con">
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<view class="share-section">
				<text class="tit">{{carinfo.car_card}}<br/> <text style="font-size: 10px;margin-left: 10px;">车牌号</text></text>
				<text class="tit" style="margin-left: 60px;">{{carinfo.car_prov_gui}}<br/><text style="font-size: 10px;">归属地</text></text>
				<text class="tit" style="margin-left: 60px;width:120px">{{carinfo.production_date}}<br/> <text style="font-size: 10px;margin-left: 10px;">出厂年月</text></text>
			</view>
			<view v-show="userinfo.uid==carinfo.merchant_id">
			<!-- <view class="c-row b-b" @click="toggleSpec(2)">
				<text class="tit" style="font-weight:bold;">参数配置</text>
				<view class="con">
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<view class="share-section">
				<text class="tit" style="font-size: 10px;">无钥匙启动系统</text>
				<text class="tit" style="font-size: 10px;">自助头灯</text>
				<text class="tit" style="font-size: 10px;">上坡辅助</text>
				<text class="tit" style="font-size: 10px;">方向盘换挡</text>
			</view> -->
			<!-- <view class="c-row b-b" @click="toggleSpec(3)">
				<text class="tit" style="font-weight:bold;">整备信息</text>
				<view class="con">
				</view>
				<text class="yticon icon-you"></text>
			</view> -->
			<view class="c-row b-b">
				<text class="tit" style="font-weight:bold;">整备信息</text>
				<view class="con">
				</view>
			</view>
			<view class="share-section">
				<text class="" style="font-size: 10px;">整备状态：待整备</text>
			</view>
			<!-- <view class="c-row b-b" @click="toggleSpec(4)">
				<text class="tit" style="font-weight:bold;">牌证信息</text>
				<view class="con">
				</view>
				<text class="yticon icon-you"></text>
			</view> -->
			<view class="c-row b-b">
				<text class="tit" style="font-weight:bold;">牌证信息</text>
				<view class="con">
				</view>
			</view>
			<view class="share-section">
				<text class="tit" style="font-size: 10px;">行驶证：-{{shouxu_info.xsz}}</text>
				<text class="tit" style="font-size: 10px;">过户次数：-{{carinfo.guohu}}</text>
				<text class="tit" style="font-size: 10px;">登记证：-{{shouxu_info.djz}}</text>
				<text class="tit" style="font-size: 10px;">钥匙：-{{carinfo.key_car_num}}</text>
				<text class="tit" style="font-size: 10px;">交强险到期日：-{{shouxu_info.jqxd}}</text>
				<text class="tit" style="font-size: 10px;">年检到期日：-{{carinfo.yearly_date}}</text>
			</view>
			<!-- <view class="c-row b-b" @click="toggleSpec(5)">
				<text class="tit" style="font-weight:bold;">过户信息</text>
				<view class="con">
				</view>
				<text class="yticon icon-you"></text>
			</view> -->
			<view class="c-row b-b">
				<text class="tit" style="font-weight:bold;">过户信息</text>
				<view class="con">
				</view>
			</view>
			<view class="share-section">
				<text class="" style="font-size: 10px;">办理状态：待过户</text>
			</view>
			<view class="share-section">
				<!-- <text class="tit" style="font-size: 10px;">办理状态：待过户</text> -->
				<!-- <text class="tit" style="font-size: 10px;">采购待落户</text>
				<text class="tit" style="font-size: 10px;">预计完成时间：</text>
				<text class="tit" style="font-size: 10px;">-</text>
				<text class="tit" style="font-size: 10px;">联系人：</text>
				<text class="tit" style="font-size: 10px;">-</text> -->
			</view>
			</view>
			<view class="c-row b-b">
				<!-- <text class="tit">催促过户</text> -->
			<!-- 	<view class="bz-list con">
					<text>7天无理由退换货 ·</text>
					<text>假一赔十 ·</text>
				</view> -->
			</view>
		<!-- 	<view class="c-row b-b" @click="toggleSpec(6)">
				<text class="tit" style="font-weight:bold;">车况信息</text>
				<view class="con">
				</view>
				<text class="yticon icon-you">编辑</text>
			</view>
			<view class="share-section">
				<text class="tit" style="font-size: 10px;">山豆根山豆根</text>
			</view> -->
		</view>
		
		<!-- 评价 -->
		<!-- <view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="yticon icon-you"></text>
			</view> 
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>
		 -->
		<!-- <view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<rich-text :nodes="desc"></rich-text>
		</view> -->
		
		<!-- 底部操作菜单 -->
		<!-- <view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-gouwuche"></text>
				<text>购物车</text>
			</navigator>
			<view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
				<text class="yticon icon-shoucang"></text>
				<text>收藏</text>
			</view>
			
			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy">立即购买</button>
				<button type="primary" class=" action-btn no-border add-cart-btn">加入购物车</button>
			</view>
		</view> -->
		
		
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="specClass"
			@touchmove.stop.prevent="stopPrevent"
			@click="toggleSpec"
		>
			<!-- 遮罩层 -->
			<!-- <view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
					</view>
				</view>
				<view v-for="(item,index) in specList" :key="index" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text 
							v-for="(childItem, childIndex) in specChildList" 
							v-if="childItem.pid === item.id"
							:key="childIndex" class="tit"
							:class="{selected: childItem.selected}"
							@click="selectSpec(childIndex, childItem.pid)"
						>
							{{childItem.name}}
						</text>
					</view>
				</view>
				<button class="btn" @click="toggleSpec">完成</button>
			</view> -->
		</view>
		<!-- 分享 -->
		<share 
			ref="share" 
			:contentHeight="580"
			:shareList="shareList"
		></share>
	</view>
</template>

<script>
	import share from '@/components/share';
	export default{
		components: {
			share
		},
		data() {
			return {
				specClass: 'none',
				specSelected:[],
				
				favorite: true,
				shareList: [],
				imgList: ['http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim','http://image.baishangtong.cn/202004022426IMG_1227(20200402-160035).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim','http://image.baishangtong.cn/202004024146IMG_1228(20200402-160125).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim'],
				userinfo:{
					
				},
				carinfo:{
					
				},
				shouxu_info:{
					
				}
			};
		},
		async onLoad(options){
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = options.id;
			if(id){
				this.loadCarinfo(id);
			}
			//规格 默认选中第一条
			// this.specList.forEach(item=>{
			// 	for(let cItem of this.specChildList){
			// 		if(cItem.pid === item.id){
			// 			this.$set(cItem, 'selected', true);
			// 			this.specSelected.push(cItem);
			// 			break; //forEach不能使用break
			// 		}
			// 	}
			// })
			this.shareList = await this.$api.json('shareList');
		},
		methods:{
			async loadCarinfo(id) {
				const userinfo = uni.getStorageSync('userinfo');
				var _self=this;
				_self.userinfo=userinfo;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car/view', 
					data: {
						"access-token":userinfo.access_token,
						"car_id":id
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							console.log('production_date'+res.data.data.car.production_date);
							_self.carinfo=res.data.data.car;
							_self.shouxu_info=res.data.data.shouxu_info;
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
			//规格弹窗开关
			toggleSpec(type) {
				if(type===1){
					var url=`/pages/car/info?id=`+this.carinfo.id;
				}else if(type===2){
					var url=`/pages/car/parameter`;
				}else if(type===3){
					var url=`/pages/car/outfit`;
				}else if(type===4){
					var url=`/pages/car/license?type=1`;
				}else if(type===5){
					var url=`/pages/car/license?type=2`;
				}else if(type===6){
					var url=`/pages/car/content`;
				}
				uni.navigateTo({
					url: url
				})
			},
			//选择规格
			selectSpec(index, pid){
				let list = this.specChildList;
				list.forEach(item=>{
					if(item.pid === pid){
						this.$set(item, 'selected', false);
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = []; 
				list.forEach(item=>{ 
					if(item.selected === true){ 
						this.specSelected.push(item); 
					} 
				})
				
			},
			//分享
			share(){
				this.$refs.share.toggleMask();	
			},
			//收藏
			toFavorite(){
				this.favorite = !this.favorite;
			},
			buy(){
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			},
			stopPrevent(){},
			//预览轮播图
				previewImage:function(index){
					var i = this.carinfo.image; //获取当前页面的轮播图数据
					//uniapp预览轮播图
					uni.previewImage({
						current:index, //预览图片的下标
						urls:i //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
					})
				}
		},

	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
		padding-bottom: 160upx;
	}
	.icon-you{
		font-size: $font-base + 2upx;
		color: #888;
	}
	.carousel {
		height: 722upx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 20upx 30upx;
		
		.title{
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}
		.price-box{
			display:flex;
			align-items:baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color:$uni-color-primary;
		}
		.price{
			font-size: $font-lg + 2upx;
		}
		.m-price{
			margin:0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;
			text{
				flex: 1;
			}
		}
	}
	/* 分享 */
	.share-section{
		display:flex;
		align-items:center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;
		.share-icon{
			display:flex;
			align-items:center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position:relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;
			&:after{
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position:absolute;
				background: $uni-color-primary;
			}
		}
		.icon-xingxing{
			position:relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}
		.tit{
			font-size: $font-base;
			margin-left:10upx;
		}
		.icon-bangzhu1{
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}
		.share-btn{
			flex: 1;
			text-align:right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}
		.icon-you{
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}
	
	.c-list{
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20upx 30upx;
			position:relative;
		}
		.tit{
			width: 140upx;
		}
		.con{
			flex: 1;
			color: $font-color-dark;
			.selected-text{
				margin-right: 10upx;
			}
		}
		.bz-list{
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			text{
				display: inline-block;
				margin-right: 30upx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}
		.red{
			color: $uni-color-primary;
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;
		.e-header{
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.tit{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10upx;
			}
		}
	}
	.eva-box{
		display: flex;
		padding: 20upx 0;
		.portrait{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;
			.con{
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color:$font-color-light;
			}
		}
	}
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16upx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;
				
			text{
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10upx 30upx;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;
				.price{
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}
		.item-list{
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}
			.selected{
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.btn{
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;
			.yticon{
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}
			&.active, &.active .yticon{
				color: $uni-color-primary;
			}
			.icon-fenxiang2{
				font-size: 42upx;
				transform: translateY(-2upx);
			}
			.icon-shoucang{
				font-size: 46upx;
			}
		}
		.action-btn-group{
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
			margin-left: 20upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base ;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
	
</style>
