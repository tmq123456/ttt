<template>
	<view  style="overflow:auto;overflow-x: hidden">
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">
			<view class="nav-item" id="brand" :class="{current: filterIndex === 0}" @click="toggleCateMask('show')">
				车辆照片/视频
			</view>
			<view class="nav-item" id="state" :class="{current: filterIndex === 1}" @click="toggleCateMask1('show')">
				证件照片
			</view>
			<view class="nav-item" id="sort" :class="{current: filterIndex === 2}" @click="toggleCateMask2('show')">
				其他照片
			</view>
		</view>
		<view v-if="infostate===1">
			<view class="info-table">
				<view class="info-table-row">
					<view class="table-row-left">车辆图片</view>
					<view class="table-row-right">
						<input type="text" />
					</view>
				</view>
			</view>
			<view class="uploads">
			<!-- 图片上传 -->
				<view class='upload-image-view'>
					<!-- 标题已经省略 -->
					<!-- <view class='title'>上传xxxx图片</view> -->
					<view class='add-view' v-if="imageList1.length < imageLength1" @tap="chooseImage1">
						<!-- 十字架 -->
						<view class="cross">
							<view class="transverse-line"></view>
							<view class="vertical-line"></view>
						</view>
		 
					</view>
					<block v-for="(image,index) in imageList1" :key="index">
						<view class='image-view'>
							<image :src="image" :data-src="image" @tap="previewImage1"></image>
							<view class='del-btn' :data-index="index">
								<view class='baicha' @tap='deleteImage1'></view>
							</view>
						</view>
					</block>
					<view class='info'>上传证书/证件，不超过{{imageLength1}}张。(非必填)</view>
				</view>
			<!-- 图片上传 -->
			</view>
			
			
			
			<!-- 车辆视频 -->
			<view class="info-table">
				<view class="info-table-row">
					<view class="table-row-left">车辆视频</view>
					<view class="table-row-right">
						<input type="text" />
					</view>
				</view>
			</view>
			<view class="uploads">
				<!-- 图片上传 -->
				<view class='upload-image-view'>
					<!-- 标题已经省略 -->
					<!-- <view class='title'>上传xxxx图片</view> -->
					<block v-for="(image,index) in imageList2" :key="index">
						<view class='image-view'>
							<image :src="image" :data-src="image" @tap="previewImage2"></image>
							<view class='del-btn' :data-index="index" @tap='deleteImage2'>
								<view class='baicha'></view>
							</view>
						</view>
					</block>
					<view class='add-view' v-if="imageList2.length < imageLength2" @tap="chooseImage2">
				 
						<!-- 十字架 -->
						<view class="cross">
							<view class="transverse-line"></view>
							<view class="vertical-line"></view>
						</view>
				 
					</view>
					<view class='info'>仅支持上传一个，视频不超过180s</view>
				</view>
			</view>
		</view>
		
		
		<!-- 证件照片 -->
		<view v-if="infostate===2">
			<view class="info-table">
				<view class="info-table-row">
					<view class="table-row-left">证件照片</view>
					<view class="table-row-right">
						<input type="text" />
					</view>
				</view>
			</view>
			<view class="uploads">
			<!-- 图片上传 -->
				<view class='upload-image-view'>
					<!-- 标题已经省略 -->
					<!-- <view class='title'>上传xxxx图片</view> -->
					<block v-for="(image,index) in imageList3" :key="index">
						<view class='image-view'>
							<image :src="image" :data-src="image" @tap="previewImage3"></image>
							<view class='del-btn' :data-index="index" @tap='deleteImage3'>
								<view class='baicha'></view>
							</view>
						</view>
					</block>
					<view class='add-view' v-if="imageList3.length < imageLength3" @tap="chooseImage3">
				 
						<!-- 十字架 -->
						<view class="cross">
							<view class="transverse-line"></view>
							<view class="vertical-line"></view>
						</view>
				 
					</view>
					<view class='info'>如需同步，首图需传行驶证或铭牌</view>
				</view>
			<!-- 图片上传 -->
			</view>
		</view>
		
		<!-- 其他照片 -->
		<view v-if="infostate===3">
			<view class="info-table">
				<view class="info-table-row">
					<view class="table-row-left">其他照片</view>
					<view class="table-row-right">
						<input type="text" />
					</view>
				</view>
			</view>
			<view class="uploads">
			<!-- 图片上传 -->
				<view class='upload-image-view'>
					<!-- 标题已经省略 -->
					<!-- <view class='title'>上传xxxx图片</view> -->
					<block v-for="(image,index) in imageList4" :key="index">
						<view class='image-view'>
							<image :src="image" :data-src="image" @tap="previewImage4"></image>
							<view class='del-btn' :data-index="index" @tap='deleteImage4'>
								<view class='baicha'></view>
							</view>
						</view>
					</block>
					<view class='add-view' v-if="imageList4.length < imageLength4" @tap="chooseImage4">
				 
						<!-- 十字架 -->
						<view class="cross">
							<view class="transverse-line"></view>
							<view class="vertical-line"></view>
						</view>
				 
					</view>
					<view class='info'>仅支持上传一个，视频不超过180s</view>
				</view>
			<!-- 图片上传 -->
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<text class="submit" @click="submit">保存</text>
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
	
	export default {
		onLoad(options){
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			let type=options.type;
			if(type==1){
				this.infostate=1;
				this.filterIndex=0;
			}else if(type==2){
				this.infostate=2;
				this.filterIndex=1;
			}else if(type==3){
				this.infostate=3;
				this.filterIndex=2;
			}
		},
		data() {
			return {
				imageList1: [], //保存图片路径集合
				imageLength1: 13, //限制图片张数
				imageList2: [], //保存图片路径集合
				imageLength2: 13, //限制图片张数
				imageList3: [], //保存图片路径集合
				imageLength3: 13, //限制图片张数
				imageList4: [], //保存图片路径集合
				imageLength4:13, //限制图片张数
				sourceTypeIndex: 3, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
				list: ["车辆照片/视频", "证件照片", "其他照片"],
				actiove:0,
				is_list:'cheliang',
				cateMaskState: 0, //分类面板展开状态
				cateMaskState1: 0, 
				cateMaskState2: 0, 
				filterIndex: 0, 
				headerPosition:"fixed",
				headerTop:'',
				infostate:1
			}
		},
		methods: {
				//选择图片
				chooseImage1: async function() {
					uni.chooseImage({
						sourceType: sourceType[this.sourceTypeIndex],
						// #ifdef MP-WEIXIN
						sizeType: sizeType[this.sizeTypeIndex],
						// #endif
						count: this.imageLength1 - this.imageList1.length,
						success: (res) => {
							const tempFilePaths = res.tempFilePaths;
							for (var s in tempFilePaths) uni.uploadFile({
								url: 'http://dg.51jump.cn/merapi/v1/file/images?access-token='+this.access_token,
								filePath: tempFilePaths[s],
								name: 'file',
								success: (uploadFileRes) => {
									console.log("qqq"+uploadFileRes.data)
									this.imageList1 = this.imageList1.concat(JSON.parse(uploadFileRes.data).data.url);
									console.log('车辆照片是：'+this.imageList1)
								}
							});
						}
					})
				},
				//预览图片
				previewImage1: function(e) {
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList1
					})
				},
				//删除图片
				deleteImage1: function(e) {
					var index = e.target.dataset.index;
					var that = this;
					var images = that.imageList1;
					images.splice(index, 1);
					that.imageList1 = images;
				},
				//选择视频
				chooseImage2: async function() {
					uni.chooseImage({
						sourceType: sourceType[this.sourceTypeIndex],
						// #ifdef MP-WEIXIN
						sizeType: sizeType[this.sizeTypeIndex],
						// #endif
						count: this.imageLength1 - this.imageList1.length,
						success: (res) => {
							const tempFilePaths = res.tempFilePaths;
							for (var s in tempFilePaths) uni.uploadFile({
								url: 'http://dg.51jump.cn/merapi/v1/file/video?access-token='+this.access_token,
								filePath: tempFilePaths[s],
								name: 'file',
								success: (uploadFileRes) => {
									this.imageList2 = this.imageList2.concat(JSON.parse(uploadFileRes.data).data.url);
									console.log('视频是：'+this.imageList2)
								}
							});
						}
					})
				},
				//预览图片
				previewImage2: function(e) {
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList2
					})
				},
				//删除图片
				deleteImage2: function(e) {
					var index = e.target.dataset.index;
					var that = this;
					var images = that.imageList2;
					images.splice(index, 1);
					that.imageList2 = images;
				},
				//选择图片
				chooseImage3: async function() {
					uni.chooseImage({
						sourceType: sourceType[this.sourceTypeIndex],
						// #ifdef MP-WEIXIN
						sizeType: sizeType[this.sizeTypeIndex],
						// #endif
						count: this.imageLength1 - this.imageList1.length,
						success: (res) => {
							const tempFilePaths = res.tempFilePaths;
							for (var s in tempFilePaths) uni.uploadFile({
								url: 'http://dg.51jump.cn/merapi/v1/file/images?access-token='+this.access_token,
								filePath: tempFilePaths[s],
								name: 'file',
								success: (uploadFileRes) => {
									this.imageList3 = this.imageList3.concat(JSON.parse(uploadFileRes.data).data.url);
									console.log('证件照片是：'+this.imageList3)
								}
							});
						}
					})
				},
				//预览图片
				previewImage3: function(e) {
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList3
					})
				},
				//删除图片
				deleteImage3: function(e) {
					var index = e.target.dataset.index;
					var that = this;
					var images = that.imageList3;
					images.splice(index, 1);
					that.imageList3 = images;
				},
				//选择图片
				chooseImage4: async function() {
					uni.chooseImage({
						sourceType: sourceType[this.sourceTypeIndex],
						// #ifdef MP-WEIXIN
						sizeType: sizeType[this.sizeTypeIndex],
						// #endif
						count: this.imageLength1 - this.imageList1.length,
						success: (res) => {
							const tempFilePaths = res.tempFilePaths;
							for (var s in tempFilePaths) uni.uploadFile({
								url: 'http://dg.51jump.cn/merapi/v1/file/images?access-token='+this.access_token,
								filePath: tempFilePaths[s],
								name: 'file',
								success: (uploadFileRes) => {
									this.imageList4 = this.imageList4.concat(JSON.parse(uploadFileRes.data).data.url);
									console.log('其他照片是：'+this.imageList4)
								}
							});
						}
					})
				},
				//预览图片
				previewImage4: function(e) {
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList4
					})
				},
				//删除图片
				deleteImage4: function(e) {
					var index = e.target.dataset.index;
					var that = this;
					var images = that.imageList4;
					images.splice(index, 1);
					that.imageList4 = images;
				},
				cutTabClick(index){
					  // console.log(index);
					  if(index==0){
						  this.is_list="cheliang";
					  }else if(index==1){
						  this.is_list="zhengjian";
					  }else{
						  this.is_list="qita";
					  }
					  this.actiove = index
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
						this.infostate=1;
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
						this.infostate=2;
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
						this.infostate=3;
					}, timer)
				},
				tabClick(index){
					if(this.filterIndex === index && index !== 2){
						return;
					}
					this.filterIndex = index;
					this.priceOrder = 0;
				},
				submit(){
					uni.navigateTo({
						url:'/pages/car/create?imageList1='+this.imageList1+'&imageList2='+this.imageList2+'&imageList3='+this.imageList3+'&imageList4='+this.imageList4
					})
					console.log("111车辆图片："+this.imageList1)
				},
		}
	}
</script>
 
<style>
	page {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		background-color: #FFFFFF;
	}
 
	.info-table {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
 
	.info-table .info-table-row {
		height: 120upx;
		width: 92%;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1upx solid rgba(204, 204, 204, 1);
	}
 
	.info-table .info-table-row .table-row-left {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(28, 28, 28, 1);
		line-height: 40upx;
		width:90px;
	}
 
	.info-table .info-table-row .table-row-right {
		display: flex;
		align-items: center;
		justify-content: center;
	}
 
	.info-table .info-table-row .table-row-right image {
		width: 13upx;
		height: 24upx;
	}
 
	.info-table .info-table-row .table-row-right input {
		width: 560upx;
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(28, 28, 28, 1);
		line-height: 40upx;
	}
 
	.table-btn-view {
		position: fixed;
		bottom: 27upx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
 
	.table-btn-view .save-btn {
		width: 92%;
		height: 90upx;
		background: rgba(0, 170, 255, 1);
		border-radius: 10upx;
		color: #FFFFFF;
	}
	
	.uploads{
		width: 92%;
	}
</style>
<style>
	/* 第一套图片上传样式（内部图标相机） */
	.upload-image-view {
		width: 100%;
		margin: 20upx 0 20upx 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	 
	.upload-image-view .title {
		width: 100%;
		font-family: PingFang-SC-Regular;
		font-size: 24upx;
		color: #4a4a4a;
		margin-bottom: 15upx;
		line-height: 100%;
	}
	 
	.upload-image-view .info {
		width: 100%;
		font-family: PingFang-SC-Regular;
		font-size: 24upx;
		color: grey;
		height: 24upx;
		margin-top: 15upx;
		line-height: 24upx;
		margin-left: 20px;
	}
	 
	.upload-image-view .image-view {
		height: 130upx;
		width: 130upx;
		position: relative;
		margin: 15upx 15upx 15upx 40upx;
		border-radius: 8upx;
	}
	 
	.upload-image-view .image-view image {
		height: 100%;
		width: 100%;
		border-radius: 8upx;
	}
	 
	.upload-image-view .image-view .del-btn {
		background-color: #f67371;
		border-radius: 50%;
		width: 25upx;
		height: 25upx;
		position: absolute;
		top: -12upx;
		right: -12upx;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	 
	.upload-image-view .image-view .del-btn .baicha {
		display: inline-block;
		width: 20upx;
		height: 5upx;
		background: #fff;
		line-height: 0;
		font-size: 0;
		vertical-align: middle;
		-webkit-transform: rotate(45deg);
	}
	 
	.upload-image-view .image-view .del-btn .baicha:after {
		content: '/';
		display: block;
		width: 20upx;
		height: 5upx;
		background: #fff;
		-webkit-transform: rotate(-90deg);
	}
	 
	.upload-image-view .add-view {
		height: 115upx;
		width: 115upx;
		margin: 15upx 15upx 15upx 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.00);
		border: 3upx dashed #979797;
		border-radius: 8upx;
	}
	 
	/* 相机 */
	 
	.upload-image-view .add-view .xiangji {
		height: 40upx;
		width: 48upx;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	 
	.upload-image-view .add-view .xiangji .tixing {
		width: 10upx;
		height: 7upx;
		background-color: #fff;
		border-right: 10upx solid #fff;
		border-bottom: 7upx solid #b2b2b2;
		border-left: 10upx solid #fff;
	}
	 
	.upload-image-view .add-view .xiangji .changfx {
		height: 32upx;
		width: 48upx;
		border-radius: 5%;
		background-color: #b2b2b2;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	 
	.upload-image-view .add-view .xiangji .changfx .yuan1 {
		height: 20upx;
		width: 20upx;
		border-radius: 50%;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	 
	.upload-image-view .add-view .xiangji .changfx .yuan2 {
		height: 10upx;
		width: 10upx;
		border-radius: 50%;
		background-color: #b2b2b2;
	}
	 
	/* 第二套图片上传样式（内部图标 十字架）*/
	 
	/* 十字架 */
	.upload-image-view .add-view .cross {
		height: 48upx;
		width: 48upx;
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	 
	.upload-image-view .add-view .cross .transverse-line {
		height: 100%;
		width: 48%;
		position: absolute;
		border-right: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
	 
	.upload-image-view .add-view .cross .vertical-line {
		height: 48%;
		width: 100%;
		position: absolute;
		border-bottom: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
</style>
<style lang='scss'>
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
			font-size: 30upx;
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
</style>
