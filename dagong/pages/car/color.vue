<template>
	<view class="container">
		<view class="list-cell b-b m-t" v-for="(item, index) in datalist" :key="index">
			<text class="cell-tit" @click="tiaozhuan(item.id,item.title,type,color_id,color_title,color_id_nei,color_title_nei,aid,aidname)">{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option){
			var _self = this;
			if(option.aid){
			_self.aid=option.aid;
			}
			if(option.aid){
			_self.aidname=option.aidname;
			}
			if(option.color_id){
			_self.color_id=option.color_id;
			}
			if(option.color_title){
			_self.color_title=option.color_title;
			}
			if(option.color_id_nei){
			_self.color_id_nei=option.color_id_nei;
			}
			if(option.color_title_nei){
			_self.color_title_nei=option.color_title_nei;
			}
			this.getlist(option.type);
		},
		data() {
			return {
				datalist:[],
				type:1,
				aid:'',
				aidname:'',
				color_id:'',
				color_title:'',
				color_id_nei:'',
				color_title_nei:''
			};
		},
		methods:{
			tiaozhuan(id,name,type,color_id,color_title,color_id_nei,color_title_nei,aid,aidname){
				if(type==1){
					uni.navigateTo({
						url:'/pages/car/create?color_id='+id+'&color_title='+name+'&aid='+aid+'&aidname='+aidname+'&color_id_nei='+color_id_nei+'&color_title_nei='+color_title_nei
					})
				}else{
					uni.navigateTo({
						url:'/pages/car/create?color_id_nei='+id+'&color_title_nei='+name+'&aid='+aid+'&aidname='+aidname+'&color_id='+color_id+'&color_title='+color_title
					})
				}
			},
			getlist(type){
				var _self = this;
				_self.type=type;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car-color/index', 
					data: {
						"access-token":this.access_toke,
						"type":type
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
