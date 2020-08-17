<template>
	<view  style="overflow:auto;overflow-x: hidden">
		<view class="list-cell m-t">
			<text class="cell-tit">新消息通知</text>
			<text style="color: grey;font-size: 12px;">去开启</text>
		</view>
		<view class="list-cell m-t">
			<text class="cell-tit">车辆消息</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">车辆预警</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">成功售出</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">调价</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">车辆发布</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">成功预定</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">回库</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">成功采购</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">审核下架通知</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">已取消预订</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">已退库</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">金融方案</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		
		<view class="list-cell m-t">
			<text class="cell-tit">公司通知</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">活动通知</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		
		<view class="list-cell m-t">
			<text class="cell-tit">客户通知</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t" style="margin-left: 50px;">
			<text class="cell-tit">变更通知</text>
			<switch checked color="#fa436a" @change="switchChange" />
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
				
			};
		},
		methods:{
			...mapMutations(['logout']),

			navTo(url){
				this.$api.msg(`跳转到${url}`);
			},
			//switch
			switchChange(e){
				let statusTip = e.detail.value ? '打开': '关闭';
				this.$api.msg(`${statusTip}消息推送`);
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
