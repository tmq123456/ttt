<template>
	<view class="container">
		<view class="list-cell b-b m-t">
			<text class="cell-tit">车辆类型</text>
			<text class="cell-tip" v-if="carinfo.type==0">二手车</text>
			<text class="cell-tip" v-if="carinfo.type==1">新车</text>
		</view>
		<view v-show="userinfo.uid==carinfo.merchant_id">
		<view class="list-cell b-b">
			<text class="cell-tit">车牌号</text>
			<text class="cell-tip">{{carinfo.car_card}}</text>
		</view>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">归属地</text>
			<text class="cell-tip">{{carinfo.car_area_gui}}</text>
		</view>
		
		<view class="list-cell b-b">
			<text class="cell-tit">所在地</text>
			<text class="cell-tip">{{carinfo.car_area}}</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">出厂年月</text>
			<text class="cell-tip">{{carinfo.production_date}}</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">车辆性质</text>
			<text class="cell-tip" v-if="carinfo.car_xz===1">公户</text>
			<text class="cell-tip" v-if="carinfo.car_xz===2">私户</text>
			<text class="cell-tip" v-if="carinfo.car_xz===3">外事车</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">使用性质</text>
			<text class="cell-tip" v-if="carinfo.use_type===1">营运</text>
			<text class="cell-tip" v-if="carinfo.use_type===2">非营运</text>
			<text class="cell-tip" v-if="carinfo.use_type===3">营转非</text>
			<text class="cell-tip" v-if="carinfo.use_type===4">租赁营运</text>
			<text class="cell-tip" v-if="carinfo.use_type===5">租赁非营运</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">车身颜色</text>
			<text class="cell-tip">{{carinfo.color}}</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">内饰颜色</text>
			<text class="cell-tip">{{carinfo.color_in}}</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">厂商认证</text>
			<text class="cell-tip" v-if="carinfo.car_renzhen===0">是</text>
			<text class="cell-tip" v-if="carinfo.car_renzhen===1">否</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">质保时间</text>
			<text class="cell-tip">{{carinfo.qa_month}}</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">质保里程</text>
			<text class="cell-tip">{{carinfo.qa_kilo}}</text>
		</view>
		<view v-show="userinfo.uid==carinfo.merchant_id">
		<view class="list-cell b-b">
			<text class="cell-tit">预警库龄</text>
			<text class="cell-tip">{{carinfo.warning_days}}</text>
		</view>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">发动机号</text>
			<text class="cell-tip">{{carinfo.engine_number}}</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">4s定期保养</text>
			<text class="cell-tip" v-if="carinfo.keep_4s===0">有</text>
			<text class="cell-tip" v-if="carinfo.keep_4s===1">无</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">保养查询记录</text>
			<text class="cell-tip">{{carinfo.keep_log}}</text>
		</view>
	</view>
</template>

<script>
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		data() {
			return {
				carinfo:{
					
				},
				car_id:''
			};
		},
		async onLoad(options){
			let id = options.id;
			if(id){
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
				_self.car_id=id;
			}
		},
		methods:{
			onNavigationBarButtonTap: async function(e) {
				if(this.userinfo.type==10){
					uni.navigateTo({
						url: `/pages/car/editor?id=`+this.car_id
					})
				}
				if(this.userinfo.type==1){
					uni.navigateTo({
						url: `/pages/car/editor1?id=`+this.car_id
					})
				}
				if(this.userinfo.type==2){
					uni.navigateTo({
						url: `/pages/car/editor2?id=`+this.car_id
					})
				}
			},
		}
	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
	}
	.list-cell{
		display:flex;
		align-items:baseline;
		padding: 20upx $page-row-spacing;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40upx;
			.cell-tit{
				color: $uni-color-primary;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30upx;
		}
		&.m-t{
			margin-top: 16upx; 
		}
		.cell-more{
			align-self: baseline;
			font-size:$font-lg;
			color:$font-color-light;
			margin-left:10upx;
		}
		.cell-tit{
			flex: 1;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			margin-right:10upx;
		}
		.cell-tip{
			font-size: $font-base;
			color: $font-color-light;
		}
		switch{
			transform: translateX(16upx) scale(.84);
		}
	}
</style>
