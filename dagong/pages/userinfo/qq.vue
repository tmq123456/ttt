<template>
	<view class="container">
		<view class="list-cell b-b m-t">
			<input type="text" placeholder="请输入" placeholder-class="placeholder" value=""/>
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
			onNavigationBarButtonTap: async function(e) {
				uni.navigateTo({
					url: `/pages/car/editoutfitorder`
				})
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
