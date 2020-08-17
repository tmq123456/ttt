<template>
	<view class="container">
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">
			<view class="nav-item"  :class="{current: filterIndex === 0}" @click="toggleCateMask('show')">
				新商机待分配
			</view>
			<view class="nav-item"  :class="{current: filterIndex === 1}" @click="toggleCateMask1('show')">
				新商机跟进
			</view>
			<view class="nav-item"  :class="{current: filterIndex === 2}" @click="toggleCateMask2('show')">
				客户跟进
			</view>
			<view class="nav-item"  :class="{current: filterIndex === 3}" @click="toggleCateMask3('show')">
				车辆跟进
			</view>
		</view>
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
		<scroll-view v-if="filterIndex==0">
			<view class="list-cell b-b m-t">
				<text class="cell-tit" style="font-weight:bolder">证件照片</text>
				<text class="cell-tip">编辑</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit" style="font-weight: bold;">基本信息</text>
				<text class="cell-tip">编辑</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">行驶证</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">登记证</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">购置税证</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户次数</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">原车主身份证</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">钥匙</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">交强险</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">年检到期日</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">原车商业险</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">现车商业险</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">原车牌照</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">新车发票</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">新车主身份证</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">铭牌</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车辆说明书</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">发动机号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">登记证件号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">临时牌照</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">环保卡标</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">原车档案</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">新车保养手册</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">新车质保</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车船税证</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">二次交易发票</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">4s店定期保养</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">备注</text>
				<text class="cell-tip">-</text>
			</view>
		</scroll-view>
		
		<scroll-view v-if="filterIndex==1">
			<view class="list-cell b-b">
				<text class="cell-tit" style="font-weight: bold;">基本信息</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户区域</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户状态</text>
				<text class="cell-tip">待落户</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">开始日期</text>
				<text class="cell-tip">2020/03/03</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">预计完成</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户费用</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户联系人</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">联系人电话</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户专员</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">加急</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户异常</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">备注</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit" style="font-weight: bold;">原车信息</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">客户类型</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">姓名</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">手机号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">身份证号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车牌号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车辆归属地</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">钥匙数量</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">使用性质</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit" style="font-weight: bold;">现车信息</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">姓名</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">手机号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">身份证号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车牌号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车辆归属地</text>
				<text class="cell-tip">-</text>
			</view>
			<!-- 底部 -->
			<view class="footer">
				<text class="submit" @click="submit(1)">编辑采购过户</text>
			</view>
		</scroll-view>
		
		<scroll-view v-if="filterIndex==2">
			<view class="list-cell b-b">
				<text class="cell-tit" style="font-weight: bold;">基本信息</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户区域</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户状态</text>
				<text class="cell-tip">待落户</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">开始日期</text>
				<text class="cell-tip">2020/03/03</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">预计完成</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户费用</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户联系人</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">联系人电话</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户专员</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">加急</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">过户异常</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">备注</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit" style="font-weight: bold;">现车信息</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">姓名</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">手机号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">身份证号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车牌号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车辆归属地</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">钥匙数量</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">使用性质</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit" style="font-weight: bold;">新车信息</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">客户类型</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">姓名</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">手机号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">身份证号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车牌号</text>
				<text class="cell-tip">-</text>
			</view>
			<view class="list-cell b-b">
				<text class="cell-tit">车辆归属地</text>
				<text class="cell-tip">-</text>
			</view>
			<!-- 底部 -->
			<view class="footer">
				<text class="submit" @click="submit(2)">编辑销售过户</text>
			</view>
		</scroll-view>
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
				cateMaskState: 0, //分类面板展开状态
				cateMaskState1: 0, 
				cateMaskState2: 0, 
				filterIndex: 0, 
				headerPosition:"fixed",
				headerTop:'',
				info:1
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
			toggleCateMask3(type){
				this.tabClick(3);
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState = 3;
				setTimeout(()=>{
					this.cateMaskState3 = state;
					this.cateMaskState = 0;
					this.cateMaskState1 = 0;
					this.cateMaskState2 = 0;
					this.info=4;
				}, timer)
			},
			tabClick(index){
				if(this.filterIndex === index && index !== 2){
					return;
				}
				this.filterIndex = index;
				this.priceOrder = 0;
				// uni.pageScrollTo({
				// 	duration: 300,
				// 	scrollTop: 0
				// })
				// this.loadData('refresh', 1);
				// uni.showLoading({
				// 	title: '正在加载'
				// })
			},
			submit(type){
				if(type===1){
					var url=`/pages/car/editlicense`;
				}else if(type===2){
					var url=`/pages/car/editlicensebuy`;
				}
				uni.navigateTo({
					url: url
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
		margin-top: 40px;
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
	.navbar{
		margin-top: -10px; 
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
			font-size: 25upx;
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