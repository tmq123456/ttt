<template>
	<view class="container">
		<view v-for="(item, index) in datalist" :key="index" class="list-cell b-b m-t" @click="navTo(item.id)" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">{{item.realname}}</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		
	<!-- 	<view class="list-cell m-t" @click="navToDetailPage(1)">
			<text class="cell-tit">小李</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell m-t b-b" @click="clearCache()" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">小张</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell m-t b-b" @click="clearCache()" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">小成</text>
			<text class="cell-more yticon icon-you"></text>
		</view> -->
	</view>
</template>

<script>
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		data() {
			return {
				datalist:{
					
				}
			};
		},
		onLoad(options){
			this.loadData();
		},
		methods:{
			// ...mapMutations(['logout']),
			onNavigationBarButtonTap: async function(e) {
				uni.navigateTo({
					url: `/pages/set/addmember`
				})
			},
			navTo(id){
				uni.navigateTo({
					url: `/pages/set/addmember?id=`+id
				})
			},
			loadData(){
				const userinfo = uni.getStorageSync('userinfo');
				var _self=this;
				_self.userinfo=userinfo;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/site/mer_list', 
					data: {
						"access-token":userinfo.access_token,
						"id":userinfo.uid,
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							console.log('1111'+res.data);
							_self.datalist=res.data.data;
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
</style>
