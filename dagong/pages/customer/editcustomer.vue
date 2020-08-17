<template>
	<view style="overflow:auto;overflow-x: hidden">
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">手机号</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">手机（备用）</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">微信号</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">姓名</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">性别</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">男</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">女</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">来源</text>
				<picker :range="type3" @change="type3Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type3[type3Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">重点客户</text>
				<radio class="radio" type="radio" name="car_type2" value="1" :checked="bianhao2==='1'" @click="radio2('1')"/><text style="font-size: 15px;margin-right: 15px;">是</text>
				<radio class="radio" type="radio" name="car_type2" value="2" :checked="bianhao2==='2'" @click="radio2('2')"/><text style="font-size: 15px;">否</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">联系地址</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">身份证</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">职业</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">兴趣</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">生日</text>
				<picker mode="date" :value="date"  @change="bindDateChange">
						<view class="">{{date}}</view>
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">同行</text>
				<radio class="radio" type="radio" name="car_type3" value="1" :checked="bianhao3==='1'" @click="radio3('1')"/><text style="font-size: 15px;margin-right: 15px;">是</text>
				<radio class="radio" type="radio" name="car_type3" value="2" :checked="bianhao3==='2'" @click="radio3('2')"/><text style="font-size: 15px;">否</text>
			</view>
			<!-- 图片上传 -->
			<view class='upload-image-view'>
				<!-- 标题已经省略 -->
				<!-- <view class='title'>上传xxxx图片</view> -->
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
		<!-- 底部 -->
		<view class="footer">
			<text class="submit" @click="submit">保存</text>
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
	export default {
		data() {
			const currentDate = this.getDate({
							format: true
						});
			const currentDate1 = this.getDate1({
				format: true
			})
			return {
				maskState: 0, //优惠券面板显示状态
				desc: '', //备注
				payType: 1, //1微信 2支付宝
				couponList: [
					'仅零售',
					'仅批发',
					'可零可批'
				],
				addressData: {
					name: '许小星',
					mobile: '13853989563',
					addressName: '金九大道',
					address: '山东省济南市历城区',
					area: '149号',
					default: false
				},
				bianhao1:'1',
				bianhao2:'1',
				bianhao3:'2',
				bianhao4:'1',
				bianhao5:'1',
				bianhao6:'1',
				bianhao7:'1',
				bianhao8:'1',
				type:["选择","到店","电话","微信","短信"],
				typeIndex:0,
				type2:["选择","H级","A级","B级","C级","无效","战败","成交"],
				type2Index:0,
				type3:["请选择","大公家选","抖音","其他","快手","同行","老客户","车猫","易车二手车","51汽车","百姓","华夏","淘宝","搜狐","58同城","赶集","第一车网","优信二手车","二手车之家","官网","大搜车","朋友介绍","微信","微博","广播","直接到店","咸鱼","微店"],
				type3Index:0,
				date: currentDate,
				time: '12:01',
				date1: currentDate1,
				time1: '12:01',
				imageList4: [], //保存图片路径集合
				imageLength4:13, //限制图片张数
				sourceTypeIndex: 3, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
			}
		},
		onLoad(option){
			
		},
		methods: {
			//显示优惠券面板
			toggleMask(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.maskState = 2;
				setTimeout(()=>{
					this.maskState = state;
				}, timer)
			},
			numberChange(data) {
				this.number = data.number;
			},
			changePayType(type){
				this.payType = type;
			},
			submit(){
				uni.redirectTo({
					//url: '/pages/money/pay'
				})
			},
			carphoto(e){
				if(e==='1'){
					uni.navigateTo({
						url: '/pages/image/image?type=1'
					})
				}else if(e==='2'){
					uni.navigateTo({
						url: '/pages/image/image?type=2'
					})
				}else{
					uni.navigateTo({
						url: '/pages/image/image?type=3'
					})
				}
			},
			stopPrevent(){},
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
			radio4(e){
				//console.log("xuanzho"+e);
				this.bianhao4=e;
			},
			radio5(e){
				//console.log("xuanzho"+e);
				this.bianhao5=e;
			},
			radio6(e){
				//console.log("xuanzho"+e);
				this.bianhao6=e;
			},
			radio7(e){
				//console.log("xuanzho"+e);
				this.bianhao7=e;
			},
			radio8(e){
				//console.log("xuanzho"+e);
				this.bianhao8=e;
			},
			typeChange:function(e){
			this.typeIndex = e.detail.value;
			},
			type2Change:function(e){
			this.type2Index = e.detail.value;
			},
			type3Change:function(e){
			this.type3Index = e.detail.value;
			},
			bindDateChange: function(e) {
				this.date = e.target.value
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
			bindDateChange1: function(e) {
				this.date1 = e.target.value;
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
				return `${year}-${month}-${day}-${hour}-${minute}`;
			},
			switchChange(e){
				let statusTip = e.detail.value ? '打开': '关闭';
				this.$api.msg(`${statusTip}消息提醒`);
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
			cutTabClick(index){
				  // console.log(index);
				  if(index==0){
					  this.is_list="cheliang";
				  }else if(index==1){
					  this.is_list="zhengjian";
				  }else{
					  this.is_list="qita";
				  }
				  this.actiove = index
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
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-bottom: 100upx;
	}

	.address-section {
		padding: 30upx 0;
		background: #fff;
		position: relative;

		.order-content {
			display: flex;
			align-items: center;
		}

		.icon-shouhuodizhi {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90upx;
			color: #888;
			font-size: 44upx;
		}

		.cen {
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 28upx;
			color: $font-color-dark;
		}

		.name {
			font-size: 34upx;
			margin-right: 24upx;
		}

		.address {
			margin-top: 16upx;
			margin-right: 20upx;
			color: $font-color-light;
		}

		.icon-you {
			font-size: 32upx;
			color: $font-color-light;
			margin-right: 30upx;
		}

		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}

	.goods-section {
		margin-top: 16upx;
		background: #fff;
		padding-bottom: 1px;

		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
		}

		.logo {
			display: block;
			width: 50upx;
			height: 50upx;
			border-radius: 100px;
		}

		.name {
			font-size: 30upx;
			color: $font-color-base;
			margin-left: 24upx;
		}

		.g-item {
			display: flex;
			margin: 20upx 30upx;

			image {
				flex-shrink: 0;
				display: block;
				width: 140upx;
				height: 140upx;
				border-radius: 4upx;
			}

			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
			}

			.title {
				font-size: 30upx;
				color: $font-color-dark;
			}

			.spec {
				font-size: 26upx;
				color: $font-color-light;
			}

			.price-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: $font-color-dark;
				padding-top: 10upx;

				.price {
					margin-bottom: 4upx;
				}
				.number{
					font-size: 26upx;
					color: $font-color-base;
					margin-left: 20upx;
				}
			}

			.step-box {
				position: relative;
			}
		}
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
	
	/* 支付列表 */
	.pay-list{
		padding-left: 40upx;
		margin-top: 16upx;
		background: #fff;
		.pay-item{
			display: flex;
			align-items: center;
			padding-right: 20upx;
			line-height: 1;
			height: 110upx;	
			position: relative;
		}
		.icon-weixinzhifu{
			width: 80upx;
			font-size: 40upx;
			color: #6BCC03;
		}
		.icon-alipay{
			width: 80upx;
			font-size: 40upx;
			color: #06B4FD;
		}
		.icon-xuanzhong2{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60upx;
			height: 60upx;
			font-size: 40upx;
			color: $base-color;
		}
		.tit{
			font-size: 32upx;
			color: $font-color-dark;
			flex: 1;
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
	
	/* 优惠券面板 */
	.mask{
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 9995;
		transition: .3s;
		
		.mask-content{
			width: 100%;
			min-height: 30vh;
			max-height: 70vh;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y:scroll;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.mask-content{
				transform: translateY(0);
			}
		}
	}

	/* 优惠券列表 */
	.coupon-item{
		display: flex;
		flex-direction: column;
		margin: 20upx 24upx;
		background: #fff;
		.con{
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;
			&:after{
				position: absolute;
				left: 0;
				bottom: 0;
				content: '';
				width: 100%;
				height: 0;
				border-bottom: 1px dashed #f3f3f3;
				transform: scaleY(50%);
			}
		}
		.left{
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			height: 100upx;
		}
		.title{
			font-size: 32upx;
			color: $font-color-dark;
			margin-bottom: 10upx;
		}
		.time{
			font-size: 24upx;
			color: $font-color-light;
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: $font-color-base;
			height: 100upx;
		}
		.price{
			font-size: 44upx;
			color: $base-color;
			&:before{
				content: '￥';
				font-size: 34upx;
			}
		}
		.tips{
			font-size: 24upx;
			color: $font-color-light;
			line-height: 60upx;
			padding-left: 30upx;
		}
		.circle{
			position: absolute;
			left: -6upx;
			bottom: -10upx;
			z-index: 10;
			width: 20upx;
			height: 20upx;
			background: #f3f3f3;
			border-radius: 100px;
			&.r{
				left: auto;
				right: -6upx;
			}
		}
	}
/* 十字架 */
	.cross {
		height: 88upx;
		width: 88upx;
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	 .cross .transverse-line {
		height: 100%;
		width: 48%;
		position: absolute;
		border-right: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
	 
	.cross .vertical-line {
		height: 48%;
		width: 100%;
		position: absolute;
		border-bottom: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
	.add-view {
		height: 185upx;
		width: 185upx;
		margin: 15upx 15upx 15upx 50upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.00);
		border: 3upx dashed #979797;
		border-radius: 8upx;
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
</style>
