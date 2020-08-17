<template>
	<view class="container">
		<view style="font-size: 12px;color: grey;">库存资金周转率</view>
		<view class="list-cell b-b m-t" @click="tiaozhuan(1)">
			<text class="cell-tit">库龄天数超过</text>
			<text class="cell-tip">35天</text>
			<text class="yticon icon-you"></text>
		</view>
		<view style="font-size: 12px;color: grey;">建议设置当库存龄达到35天时触发预警</view>
		<view style="font-size: 12px;color: grey;margin-top: 20px;"></view>
		<view style="font-size: 12px;color: grey;">库存资金周转率</view>
		<view class="list-cell b-b m-t" @click="tiaozhuan(2)">
			<text class="cell-tit">近30天总销售额与库存占用资金的比值</text>
			<text class="cell-tip">50%</text>
			<text class="yticon icon-you"></text>
		</view>
		<view style="font-size: 12px;color: grey;">比值越小，则表明库存周转率速度越慢，建议设置比值低于50%时触发预警</view>
		<view style="font-size: 12px;color: grey;margin-top: 20px;"></view>
		<view style="font-size: 12px;color: grey;">周转率过低的评估师</view>
		<view class="list-cell b-b m-t" @click="tiaozhuan(3)">
			<text class="cell-tit">近30天销售额与其占用资金的比值</text>
			<text class="cell-tip">50%</text>
			<text class="yticon icon-you"></text>
		</view>
		<view style="font-size: 12px;color: grey;">比值越小，则表明该评估师采购的车辆周转速度越慢，建议设置比值低于50%时触发预警</view>
		<view style="font-size: 12px;color: grey;margin-top: 20px;"></view>
		<view style="font-size: 12px;color: grey;">上架超期</view>
		<view class="list-cell b-b m-t"  @click="tiaozhuan(4)">
			<text class="cell-tit">入库天数超过</text>
			<text class="cell-tip">35天</text>
			<text class="yticon icon-you"></text>
		</view>
		<view style="font-size: 12px;color: grey;">建议设置当入库天数超过1天任未上架时触发预警</view>
		<view style="font-size: 12px;color: grey;margin-top: 20px;"></view>
		<view style="font-size: 12px;color: grey;">浏览量过低</view>
		<view class="list-cell b-b m-t"  @click="tiaozhuan(5)">
			<text class="cell-tit">入库天数超过</text>
			<text class="cell-tip">5天</text>
			<text class="yticon icon-you"></text>
		</view>
		<view class="list-cell b-b"  @click="tiaozhuan(6)">
			<text class="cell-tit">浏览量低于</text>
			<text class="cell-tip">100次</text>
			<text class="yticon icon-you"></text>
		</view>
		<view style="font-size: 12px;color: grey;">建议设置当入库天数超过5天且浏览量低于100次时触发预警</view>
	
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
			onNavigationBarButtonTap: async function(e) {
				uni.navigateTo({
					url: `/pages/car/editor`
				})
			},
			tiaozhuan:function(type){
				console.log(type)
				if(type===1){
					var url="/pages/warning/getvalue?type=1";
				}else if(type===2){
					var url="/pages/warning/getvalue?type=2";
				}else if(type===3){
					var url="/pages/warning/getvalue?type=3";
				}else if(type===4){
					var url="/pages/warning/getvalue?type=4";
				}else if(type===5){
					var url="/pages/warning/getvalue?type=5";
				}else if(type===6){
					var url="/pages/warning/getvalue?type=6";
				}
				console.log(url)
				uni.navigateTo({
					url: url
				})
			}
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
	.yticon{
		font-size: 30upx;
		line-height: 48upx;
		color: $font-color-light;
	}
</style>
