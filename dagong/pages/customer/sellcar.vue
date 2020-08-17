<template>
	<view style="overflow:auto;overflow-x: hidden">
		<view class="c-list">
			<view class="c-row" @click="toggleSpec(1)">
				<image src="../../static/arc.png" style="width: 100px;height: 50px;"></image>
				<view class="c-row" @click="toggleSpec(1)">
					<text style="font-size: 13px;margin-top: -35px;font-weight: bold;">丰田 2017款 卡罗拉 改装双擎 1.8L</text>
					<text style="font-size: 10px;margin-left: -200px;color: grey;">2018年09月 | 2.70万公里</text>
					<text style="font-size: 10px;margin-left: -115px;margin-top: 30px;color: grey;">在售 | 库龄8天</text>
				</view>
			</view>
			<view class="c-row b-b" @click="toggleSpec(1)">
				<view class="c-row" @click="toggleSpec(1)">
					<text style="font-size: 10px;margin-top: -35px;color: grey;">评估师：善用强  |  预计整备费： 0元</text>
				</view>
			</view>
		</view>
		<view class="">
			<text class="name" style="font-size: 16px;color: grey;">销售信息</text>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">成交价</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />万元
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">定金</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />元
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">付款方式</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">全款</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">按揭</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">保险公司</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">商业险到期日</text>
				<picker mode="date" :value="date"  @change="bindDateChange">
					<view class="">{{date}}</view>
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">交强险到期日</text>
				<picker mode="date" :value="date1"  @change="bindDateChange1">
					<view class="">{{date1}}</view>
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">过户</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao2==='1'" @click="radio2('1')"/><text style="font-size: 15px;">本地</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao2==='2'" @click="radio2('2')"/><text style="font-size: 15px;">外迁</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">销售类型</text>
				<picker :range="type3" @change="type3Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="font-size: 15px;">{{type3[type3Index]}}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">预定/出售日期</text>
				<picker mode="date" :value="date2"  @change="bindDateChange2">
						<view class="">{{date2}}</view>
				</picker>
			</view>
		</view>
		<view class="">
			<text class="name" style="font-size: 16px;color: grey;">衍生收入</text>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">按揭手续费</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />元
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">保险返利</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />元
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">精品利润</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />元
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">质保利润</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />元
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">加装利润</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />元
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">其他</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />元
			</view>
			<view class="yt-list-cell b-b">
				<textarea class="desc" type="text" placeholder="备注" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="">
			<text class="name" style="font-size: 16px;color: grey;">客户信息</text>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">客户类型</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao3==='1'" @click="radio3('1')"/><text style="font-size: 15px;">个人</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao3==='2'" @click="radio3('2')"/><text style="font-size: 15px;">公司</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">姓名</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">来源</text>
				<picker :range="type2" @change="type2Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="font-size: 15px;">{{type2[type2Index]}}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">身份证号</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">地址</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">付款人</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">开户行</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">银行卡号</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">其他账户</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="">
			<text class="name" style="font-size: 16px;color: grey;">资料照片</text>
		</view>
		<view class="yt-list">
			<!-- 图片上传 -->
			<view class='upload-image-view'>
				<!-- 标题已经省略 -->
				<block v-for="(image,index) in imageList4" :key="index">
					<view class='image-view'>
						<image :src="image" :data-src="image" @tap="previewImage4"></image>
						<view class='del-btn' :data-index="index" @tap='deleteImage4'>
							<view class='baicha'></view>
						</view>
					</view>
				</block>
				<view class='add-view' v-if="imageList4.length < imageLength4" @tap="chooseImage4">
					<!-- 十字架 -->
					<view class="cross">
						<view class="transverse-line"></view>
						<view class="vertical-line"></view>
					</view>
			 
				</view>
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">备注</text>
				<textarea class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<text class="submit" @click="submit(2)">保存</text>
		</view>
	</view>
</template>
<script>
	var sourceType = [
		['camera'], //拍照
		['album'], //相册
		['camera', 'album'] //拍照或相册
	]
	var sizeType = [
		['compressed'], //压缩
		['original'], //原图
		['compressed', 'original'] //压缩或原图
	]
	export default{
		data() {
			const currentDate = this.getDate({
							format: true
						});
			const currentDate1 = this.getDate1({
							format: true
						});
			const currentDate2 = this.getDate2({
							format: true
						})
			return {
				bianhao3:'1',
				bianhao2:'1',
				bianhao1:'1',
				cateMaskState: 0, //分类面板展开状态
				cateMaskState1: 0, 
				cateMaskState2: 0, 
				filterIndex: 0, 
				headerPosition:"fixed",
				headerTop:document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px',
				info:1,
				date: currentDate,
				time: '12:01',
				date1: currentDate1,
				time1: '12:01',
				date2: currentDate2,
				time2: '12:01',
				type3:["请选择","批发","零售"],
				type3Index:0,
				type2:["请选择","大公家选","抖音","其他","快手","同行","老客户","车猫","易车二手车","51汽车","百姓","华夏","淘宝","搜狐","58同城","赶集","第一车网","优信二手车","二手车之家","官网","大搜车","朋友介绍","微信","微博","广播","直接到店","咸鱼","微店"],
				type2Index:0,
				imageList4: [], //保存图片路径集合
				imageLength4:13, //限制图片张数
				sourceTypeIndex: 3, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
			};
		},
		async onLoad(options){
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			let type=options.type;
			if(type==1){
				this.info=1;
				this.filterIndex=0;
			}else if(type==2){
				this.info=2;
				this.filterIndex=1;
			}
		},
		methods:{
			//规格弹窗开关
			tiaozhuan(type) {
				if(type===1){
					var url=`/pages/car/editoutfit`;
				}else if(type===2){
					var url=`/pages/car/editoutfitorder`;
				}else if(type===3){
					var url=`/pages/car/outfitorderdetail`;
				}
				uni.navigateTo({
					url: url
				})
			},
			toggleCateMask(type){
				this.tabClick(0);
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState = 2;
				setTimeout(()=>{
					this.cateMaskState = state;
					this.cateMaskState1 = 0;
					this.cateMaskState2 = 0;
					this.info=1;
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
					this.info=2;
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
					this.info=3;
				}, timer)
			},
			tabClick(index){
				if(this.filterIndex === index && index !== 2){
					return;
				}
				this.filterIndex = index;
				this.priceOrder = 0;
			},
			submit(type){
				uni.navigateTo({
					url: `/pages/customer/receivables`
				})
			},
			toggleSpec(){
				uni.navigateTo({
					url: "/pages/car/product"
				})
			},
			radio1(e){
				//console.log("xuanzho"+e);
				this.bianhao1=e;
			},
			radio2(e){
				//console.log("xuanzho"+e);
				this.bianhao2=e;
			},
			radio3(e){
				//console.log("xuanzho"+e);
				this.bianhao3=e;
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			 
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange: function(e) {
				this.date = e.target.value;
			},
			getDate1(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let hour =date.getHours();
				let minute=date.getMinutes();
			 
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange1: function(e) {
				this.date1 = e.target.value;
			},
			getDate2(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let hour =date.getHours();
				let minute=date.getMinutes();
			 
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange2: function(e) {
				this.date2 = e.target.value;
			},
			type3Change:function(e){
			this.type3Index = e.detail.value;
			},
			type2Change:function(e){
			this.type2Index = e.detail.value;
			},
			//选择图片
			chooseImage4: async function() {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					// #ifdef MP-WEIXIN
					sizeType: sizeType[this.sizeTypeIndex],
					// #endif
					count: this.imageLength4 - this.imageList4.length,
					success: (res) => {
						this.imageList4 = this.imageList4.concat(res.tempFilePaths);
					}
				})
			},
			//预览图片
			previewImage4: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList4
				})
			},
			//删除图片
			deleteImage4: function(e) {
				var index = e.target.dataset.index;
				var that = this;
				var images = that.imageList4;
				images.splice(index, 1);
				that.imageList4 = images;
			},
		},

	}
</script>
<style lang='scss'>
	page{
		background: $page-color-base;
		padding-bottom: 160upx;
	}
	
	.c-list{
		/* margin-top: 10px; */
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
	
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		display: flex;
		align-items: center;
		width: 100%;
		height: 90upx;
		justify-content: space-between;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		color: $font-color-base;
		box-shadow: 0 -1px 5px rgba(0,0,0,.1);
		.price-content{
			padding-left: 30upx;
		}
		.price-tip{
			color: $base-color;
			margin-left: 8upx;
		}
		.price{
			font-size: 36upx;
			color: $base-color;
		}
		.submit{
			display:flex;
			align-items:center;
			justify-content: center;
			width: 880upx;
			height: 100%;
			color: #fff;
			font-size: 32upx;
			background-color: $base-color;
		}
	}
	

	.upload-image-view {
		width: 100%;
		margin: 20upx 0 20upx 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	 
	.upload-image-view .title {
		width: 100%;
		font-family: PingFang-SC-Regular;
		font-size: 24upx;
		color: #4a4a4a;
		margin-bottom: 15upx;
		line-height: 100%;
	}
	 
	.upload-image-view .info {
		width: 100%;
		font-family: PingFang-SC-Regular;
		font-size: 24upx;
		color: grey;
		height: 24upx;
		margin-top: 15upx;
		line-height: 24upx;
		margin-left: 20px;
	}
	 
	.upload-image-view .image-view {
		height: 130upx;
		width: 130upx;
		position: relative;
		margin: 15upx 15upx 15upx 40upx;
		border-radius: 8upx;
	}
	 
	.upload-image-view .image-view image {
		height: 100%;
		width: 100%;
		border-radius: 8upx;
	}
	 
	.upload-image-view .image-view .del-btn {
		background-color: #f67371;
		border-radius: 50%;
		width: 25upx;
		height: 25upx;
		position: absolute;
		top: -12upx;
		right: -12upx;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	 
	.upload-image-view .image-view .del-btn .baicha {
		display: inline-block;
		width: 20upx;
		height: 5upx;
		background: #fff;
		line-height: 0;
		font-size: 0;
		vertical-align: middle;
		-webkit-transform: rotate(45deg);
	}
	 
	.upload-image-view .image-view .del-btn .baicha:after {
		content: '/';
		display: block;
		width: 20upx;
		height: 5upx;
		background: #fff;
		-webkit-transform: rotate(-90deg);
	}
	 
	.upload-image-view .add-view {
		height: 115upx;
		width: 115upx;
		margin: 15upx 15upx 15upx 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.00);
		border: 3upx dashed #979797;
		border-radius: 8upx;
	}
	 
	/* 相机 */
	 
	.upload-image-view .add-view .xiangji {
		height: 40upx;
		width: 48upx;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	 
	.upload-image-view .add-view .xiangji .tixing {
		width: 10upx;
		height: 7upx;
		background-color: #fff;
		border-right: 10upx solid #fff;
		border-bottom: 7upx solid #b2b2b2;
		border-left: 10upx solid #fff;
	}
	 
	.upload-image-view .add-view .xiangji .changfx {
		height: 32upx;
		width: 48upx;
		border-radius: 5%;
		background-color: #b2b2b2;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	 
	.upload-image-view .add-view .xiangji .changfx .yuan1 {
		height: 20upx;
		width: 20upx;
		border-radius: 50%;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	 
	.upload-image-view .add-view .xiangji .changfx .yuan2 {
		height: 10upx;
		width: 10upx;
		border-radius: 50%;
		background-color: #b2b2b2;
	}
	 
	/* 第二套图片上传样式（内部图标 十字架）*/
	 
	/* 十字架 */
	.upload-image-view .add-view .cross {
		height: 48upx;
		width: 48upx;
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	 
	.upload-image-view .add-view .cross .transverse-line {
		height: 100%;
		width: 48%;
		position: absolute;
		border-right: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
	 
	.upload-image-view .add-view .cross .vertical-line {
		height: 48%;
		width: 100%;
		position: absolute;
		border-bottom: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
	.yt-list {
		margin-top: 16upx;
		background: #fff;
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