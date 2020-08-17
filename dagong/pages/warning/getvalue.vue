<template>
	<view class="container">
		<view class="list-cell b-b m-t" style="width: 180px;margin-top: 200px;margin-left: 100px;" v-show="type===1">
			<input type="text" placeholder="" placeholder-class="placeholder" value=""/>天
		</view>
		<view class="list-cell b-b m-t" style="width: 180px;margin-top: 200px;margin-left: 100px;" v-show="type===2">
			<input type="text" placeholder="" placeholder-class="placeholder" value=""/>%
		</view>
		<view class="list-cell b-b m-t" style="width: 180px;margin-top: 200px;margin-left: 100px;" v-show="type===3">
			<input type="text" placeholder="" placeholder-class="placeholder" value=""/>%
		</view>
		<view class="list-cell b-b m-t" style="width: 180px;margin-top: 200px;margin-left: 100px;" v-show="type===4">
			<input type="text" placeholder="" placeholder-class="placeholder" value=""/>天
		</view>
		<view class="list-cell b-b m-t" style="width: 180px;margin-top: 200px;margin-left: 100px;" v-show="type===5">
			<input type="text" placeholder="" placeholder-class="placeholder" value=""/>天
		</view>
		<view class="list-cell b-b m-t" style="width: 180px;margin-top: 200px;margin-left: 100px;" v-show="type===6">
			<input type="text" placeholder="" placeholder-class="placeholder" value=""/>天
		</view>
		<view class="" style="width: 180px;margin-top: 11px;margin-left: 100px;text-align: center;">
			<text style="color: grey;font-size: 12px;">{{content}}</text>
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
				type:1,
				content:'请输入库龄天数'
			};
		},
		methods:{
			// ...mapMutations(['logout']),

			// navTo(url){
			// 	this.$api.msg(`跳转到${url}`);
			// },
			//退出登录
			// toLogout(){
			// 	uni.showModal({
			// 	    content: '确定要退出登录么',
			// 	    success: (e)=>{
			// 	    	if(e.confirm){
			// 	    		this.logout();
			// 	    		setTimeout(()=>{
			// 	    			uni.navigateBack();
			// 	    		}, 200)
			// 	    	}
			// 	    }
			// 	});
			// },
			// onNavigationBarButtonTap: async function(e) {
			// 	uni.navigateTo({
			// 		url: `/pages/car/editor`
			// 	})
			// },
			onLoad(option){
				console.log(option.type)
				if(option.type==1){
					this.type=1;
					this.content='请输入库龄天数';
				}else if(option.type==2){
					this.type=2;
					this.content='请输入近30天总销售额与库存占用资金的比值';
				}else if(option.type==3){
					this.type=3;
					this.content='请输入近30天总销售额与其占用资金的比值';
				}else if(option.type==4){
					this.type=4;
					this.content='请输入上架超期预警天数';
				}else if(option.type==5){
					this.type=5;
					this.content='请输入触发预警的入库天数';
				}else if(option.type==6){
					this.type=6;
					this.content='请输入触发预警的入浏览量';
				}
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
