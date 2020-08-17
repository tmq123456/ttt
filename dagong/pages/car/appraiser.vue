<template>
	<view class="container">
		<view class="list-cell b-b m-t" v-for="(item, index) in datalist" :key="index">
			<text class="cell-tit" @click="tiaozhuan(item.id,item.name,color_id,color_title,color_id_nei,color_title_nei)">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option){
			var _self = this;
			_self.color_id=option.color_id;
			_self.color_title=option.color_title;
			_self.color_id_nei=option.color_id_nei;
			_self.color_title_nei=option.color_title_nei;
			console.log('yanseshi:'+_self.color_id);
			this.getlist();
		},
		data() {
			return {
				datalist:[],
				color_id:'',
				color_title:'',
				color_id_nei:'',
				color_title_nei:''
			};
		},
		methods:{
			tiaozhuan(id,name,color_id,color_title,color_id_nei,color_title_nei){
				console.log('11111'+color_title)
				uni.navigateTo({
					url:'/pages/car/create?aid='+id+'&aidname='+name+'&color_id='+color_id+'&color_title='+color_title+'&color_id_nei='+color_id_nei+'&color_title_nei='+color_title_nei
				})
				console.log(name)
			},
			getlist(){
				var _self = this;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car-assessment/index', 
					data: {
						"access-token":this.access_toke,
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						console.log(res.data.data)
						if(res.data.code=== 200){
							_self.datalist=res.data.data;
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
