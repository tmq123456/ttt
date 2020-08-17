<template>
	<view style="overflow:auto;overflow-x: hidden">
		<!-- 金额明细 -->
		<view class="yt-list">
			<view style="font-size: 12px;color: grey;">基本信息</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">过户区域</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">本地</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">外迁</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">过户状态</text>
				<picker :range="type3" @change="type3Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type3[type3Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">开始日期</text>
				<picker mode="date" :value="date"  @change="bindDateChange">
						<view class="">{{date}}</view>
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">预计完成</text>
				<picker mode="date" :value="date1"  @change="bindDateChange1">
						<view class="">{{date1}}</view>
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">过户费用</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" value="111"/>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">过户联系人</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">联系人电话</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">过户专员</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">加急</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">是</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">否</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">4s过户异常</text>
				<radio class="radio" type="radio" name="car_type2" value="1" :checked="bianhao2==='1'" @click="radio2('1')"/><text style="font-size: 15px;margin-right: 15px;">是</text>
				<radio class="radio" type="radio" name="car_type2" value="2" :checked="bianhao2==='2'" @click="radio2('2')"/><text style="font-size: 15px;">否</text>
			</view>
			<view class="yt-list-cell b-b">
				<textarea placeholder="请输入备注信息"></textarea>
			</view>
			<view style="font-size: 12px;color: grey;">现车信息</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">姓名</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">联系电话</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">身份证号</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车牌号</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车辆归属地</text>
				<text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 12px;" @click="showMulLinkageThreePicker">{{pickerText}}</text> 
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">钥匙数量</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">使用性质</text>
				<picker :range="type2" @change="type2Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type2[type2Index] }}</text> 
				</picker>
			</view>
			<view style="font-size: 12px;color: grey;">新车信息</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">客户类型</text>
				<radio class="radio" type="radio" name="car_type2" value="1" :checked="bianhao3==='1'" @click="radio3('1')"/><text style="font-size: 15px;margin-right: 15px;">直客</text>
				<radio class="radio" type="radio" name="car_type2" value="2" :checked="bianhao3==='2'" @click="radio3('2')"/><text style="font-size: 15px;">合作商</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">姓名</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">手机号</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">身份证号</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车牌号</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车辆归属地</text>
				<text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 12px;" @click="showMulLinkageThreePicker1">{{pickerText1}}</text> 
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<text class="submit" @click="submit">保存</text>
		</view>
		<!-- 城市地区联动 -->
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
		 
		 <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		  @onConfirm="onConfirm1" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		 <mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker1" :pickerValueDefault="cityPickerValueDefault"
		  @onCancel="onCancel" @onConfirm="onConfirm1"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	// https://github.com/zhetengbiji/mpvue-citypicker
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue';
	import mpvueCityPicker1 from '@/components/mpvue-citypicker/mpvueCityPicker1.vue'
	import cityData from '@/common/city.data.js';
	export default {
		components: {
		    mpvuePicker,
		    mpvueCityPicker,
			mpvueCityPicker1
		},
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
				type2:["营运","非营运","营转非","租赁营运","租赁非营运"],
				type2Index:0,
				type3:["待落户","验车完成","过户完成"],
				type3Index:0,
				date: currentDate,
				time: '12:01',
				date1: currentDate1,
				time1: '12:01',
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '请选择',
				pickerText1: '请选择',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[]
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
				return `${year}-${month}-${day}`;
			},
			switchChange(e){
				let statusTip = e.detail.value ? '打开': '关闭';
				this.$api.msg(`${statusTip}消息提醒`);
			},
			// 三级联动选择
			showMulLinkageThreePicker() {
			    this.$refs.mpvueCityPicker.show()
			},
			showMulLinkageThreePicker1() {
			    this.$refs.mpvueCityPicker1.show()
			},
			onConfirm(e) {
			    this.pickerText = e.label
			},
			onConfirm1(e) {
			    this.pickerText1 = e.label
			}
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
</style>
