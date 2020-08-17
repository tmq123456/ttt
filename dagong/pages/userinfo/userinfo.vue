<template>
	<view class="container">
		<view class="list-cell b-b m-t" @tap="chooseImage">
			<text class="cell-tit">头像</text>
			<image class="cell-tip" :src="logo" :data-src="logo" style="width: 20px;height: 20px;"></image>
			<text class="yticon icon-you"></text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">姓名</text>
			<input class="desc" type="text" @blur='tijiao(4)' :value="this.realname" @input="onKeyUserNameInput4"/>
			<text class="yticon icon-you"></text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">性别</text>
			<picker :range="type3" @change="type3Change" :value="gender">
			    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{type3[type3Index] }}</text> 
			</picker>
			<text class="yticon icon-you"></text>
		</view>
		
		<view class="list-cell b-b">
			<text class="cell-tit">手机</text>
			<input class="desc" type="text" @blur='tijiao(1)' :value="this.mobile" @input="onKeyUserNameInput1"/>
			<text class="yticon icon-you"></text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">微信</text>
			<input class="desc" type="text"  @blur='tijiao(2)' :value="this.wechat" @input="onKeyUserNameInput2"/>
			<text class="yticon icon-you"></text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">qq</text>
			<input class="desc" type="text"  @blur='tijiao(3)' :value="this.qq" @input="onKeyUserNameInput3"/>
			<text class="yticon icon-you"></text>
		</view>
	<!-- 	<view class="list-cell b-b m-t">
			<text class="cell-tit">门店</text>
			<text class="cell-tip">{{this.listdata.company_name}}</text>
		</view> -->
		<!-- <view class="list-cell b-b">
			<text class="cell-tit">部门</text>
			<text class="cell-tip">门店管理员</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">职务</text>
			<text class="cell-tip">店长</text>
		</view>
		<view class="list-cell b-b">
			<text class="cell-tit">系统权限</text>
			<text class="cell-tip">店长，整备专员，财务</text>
		</view> -->
		<view class="list-cell b-b m-t"   @click="tiaozhuan(3)">
			<text class="cell-tit">切换账号</text>
			<text class="yticon icon-you"></text>
		</view>
		<view class="list-cell b-b"  @click="tiaozhuan(4)">
			<text class="cell-tit">修改密码</text>
			<text class="yticon icon-you"></text>
		</view>
		<!-- 底部 -->
		<view class="list-cell b-b m-t"  @click="tiaozhuan(5)">
			<text class="submit" @click="toLogout">退出账号</text>
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
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		async onLoad(options){
			// var _self=this;
			// uni.getStorage({
			// 	key: 'userinfo',
			// 	success: function(res) {
			// 		const listdata = res.data;
			// 		this.list = listdata;
			// 		_self.access_token=this.list.access_token;
			// 	},
			// 	fail:function(e){
			// 		uni.navigateTo({
			// 			url: '/pages/public/login'
			// 		})
			// 	}
			// });
			this.loadCateList();
		},
		data() {
			return {
				userData:{
					
				},
				access_token:'',
				logo:'',
				realname:'',
				gender:'',
				mobile:'',
				wechat:'',
				qq:'',
				sourceTypeIndex: 3, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
				type3:["男","女"],
				type3Index:0,
				list:{
					
				},
				userinfo:{
					
				}
			};
		},
		methods:{
			...mapMutations(['logout']),

			navTo(url){
				this.$api.msg(`跳转到${url}`);
			},
			//退出登录
			toLogout(){
				uni.showModal({
				    // content: '确定要退出登录么',
				    success: (e)=>{
						console.log(11222)
				    	if(e.confirm){
				    		uni.removeStorage({
				    		  key: 'userinfo'  
				    		})
				    		setTimeout(()=>{
				    			uni.navigateBack();
				    		}, 200)
				    	}
				    }
				});
			},
			onNavigationBarButtonTap: async function(e) {
				uni.navigateTo({
					url: `/pages/car/editor`
				})
			},
			//选择图片
			chooseImage: async function() {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					// #ifdef MP-WEIXIN
					sizeType: sizeType[this.sizeTypeIndex],
					// #endif
					count: 1,
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						uni.uploadFile({
							url: 'http://dg.51jump.cn/merapi/v1/file/images?access-token='+this.userinfo.access_token,
							filePath: tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								this.logo = JSON.parse(uploadFileRes.data).data.url;
								this.userData.head_portrait=this.logo;
								let data = this.userData;
								uni.request({
									url: 'http://dg.51jump.cn/merapi/v1/site/update?access-token='+this.userinfo.access_token+'&id='+this.uid, 
									data: JSON.stringify(data),
									method:"post",
									header: {
										'custom-header': 'hello' //自定义请求头信息
									},
									success: function (res) {
										if(res.data.code=== 200){
											uni.showToast({
												icon: 'none',
												title: '保存成功',
												duration: 2000
											});
										}else{
											uni.showToast({
												icon: 'none',
												title: '保存失败',
												duration: 2000
											});
										}
									}
								});
							}
						});
					}
				})
			},
			type3Change:function(e){
				this.type3Index = e.detail.value;
				console.log('性别'+e.detail.value)
				this.userData.gender=e.detail.value;
				let data = this.userData;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/site/update?access-token='+this.userinfo.access_token+'&id='+this.uid, 
					data: JSON.stringify(data),
					method:"post",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							uni.showToast({
								icon: 'none',
								title: '保存成功',
								duration: 2000
							});
						}else{
							uni.showToast({
								icon: 'none',
								title: '保存失败',
								duration: 2000
							});
						}
					}
				});
			},
			tiaozhuan:function(type){
				if(type===1){
					var url="/pages/userinfo/weixin";
				}else if(type===2){
					var url="/pages/userinfo/qq";
				}else if(type===3){
					uni.removeStorage({
					  key: 'userinfo'  
					})
					var url="/pages/public/login";
				}else if(type===4){
					uni.removeStorage({
					  key: 'userinfo'  
					})
					var url="/pages/public/login";
				}else if(type===5){
					uni.removeStorage({
					  key: 'userinfo'  
					})
					var url="/pages/public/login";
				}
				uni.navigateTo({
					url: url
				})
			},
			tijiao(type){
				if(type==1){
					this.userData.mobile=this.mobile;
				}else if(type==2){
					this.userData.wechat=this.wechat;
				}else if(type==3){
					this.userData.qq=this.qq;
				}else{
					this.userData.realname=this.realname;
				}
				let data = this.userData;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/site/update?access-token='+this.userinfo.access_token+'&id='+this.uid, 
					data: JSON.stringify(data),
					method:"post",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							uni.showToast({
								icon: 'none',
								title: '保存成功',
								duration: 2000
							});
						}else{
							uni.showToast({
								icon: 'none',
								title: '保存失败',
								duration: 2000
							});
						}
					}
				});
			},
			loadCateList(){
				const userinfo = uni.getStorageSync('userinfo'); 
				var _self=this;
				_self.userinfo=userinfo;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/site/view', 
					data: {
						"access-token":userinfo.access_token,
						"id":userinfo.uid
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							_self.logo=res.data.data.head_portrait;
							_self.realname=res.data.data.realname;
							_self.gender=res.data.data.gender;
							_self.type3Index=res.data.data.gender;
							_self.mobile=res.data.data.mobile;
							_self.wechat=res.data.data.wechat;
							_self.qq=res.data.data.qq;
							console.log(_self.logo)
						}
					}
				});
				
			},
			onKeyUserNameInput1: function(event) {  
			   this.mobile = event.target.value;
			},
			onKeyUserNameInput2: function(event) {
			   this.wechat = event.target.value;
			},
			onKeyUserNameInput3: function(event) {
			   this.qq = event.target.value;
			},
			onKeyUserNameInput4: function(event) {
			   this.realname = event.target.value;
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
