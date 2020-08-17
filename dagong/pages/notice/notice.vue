<template>
	<view>
		<view class="notice-item">
			<text class="time">11:30</text>
			<view class="content">
				<text class="title">已退库</text>
				<text class="title" style="margin-left:200px;margin-top: -45px;">操作人：张世龙</text>
				<view class="img-wrapper">
					<image class="pic" src="http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim"></image>
				</view>
				<text class="introduce">
					2020款 奥迪Q5 奥迪Q5 奥迪Q5 
					运动版
					14.98
					14.98
				</text>
				<view class="bot b-t">
					<text>原因：</text>
					<text class="more-icon yticon icon-you"></text>
				</view>
			</view>
		</view>
		<view class="notice-item">
			<text class="time">昨天 11:30</text>
			<view class="content">
				<text class="title">发布</text>
				<text class="title" style="margin-left:200px;margin-top: -45px;">操作人：张世龙</text>
				<view class="img-wrapper">
					<image class="pic" src="http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim"></image>
				</view>
				<text class="introduce">
					2020款 奥迪Q5 奥迪Q5 奥迪Q5 
					运动版
					14.98
					14.98
				</text>
				<view class="bot b-t">
					<text>查看匹配客户</text>
					<text class="more-icon yticon icon-you"></text>
				</view>
			</view>
		</view>
		<view class="notice-item">
			<text class="time">前天 11:30</text>
			<view class="content">
				<text class="title">成功收购</text>
				<text class="title" style="margin-left:200px;margin-top: -45px;">操作人：张世龙</text>
				<view class="img-wrapper">
					<image class="pic" src="http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim"></image>
				</view>
				<text class="introduce">
					2020款 奥迪Q5 奥迪Q5 奥迪Q5 
					运动版
					14.98
					14.98
				</text>
				<view class="bot b-t">
					<text>查看匹配客户</text>
					<text class="more-icon yticon icon-you"></text>
				</view>
			</view>
		</view>
		<view class="notice-item">
			<text class="time">前天 11:30</text>
			<view class="content">
				<text class="title">成功售出</text>
				<text class="title" style="margin-left:200px;margin-top: -45px;">操作人：张世龙</text>
				<view class="img-wrapper">
					<image class="pic" src="http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim"></image>
				</view>
				<text class="introduce">
					2020款 奥迪Q5 奥迪Q5 奥迪Q5 
					运动版
					14.98
					14.98
				</text>
				<view class="bot b-t">
					<text>查看详情</text>
					<text class="more-icon yticon icon-you"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang='scss'>
	page {
		background-color: #f7f7f7;
		padding-bottom: 30upx;
	}

	.notice-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.time {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80upx;
		padding-top: 10upx;
		font-size: 26upx;
		color: #7d7d7d;
	}

	.content {
		width: 710upx;
		padding: 0 24upx;
		background-color: #fff;
		border-radius: 4upx;
	}

	.title {
		display: flex;
		align-items: center;
		height: 90upx;
		font-size: 32upx;
		color:grey;
	}

	.img-wrapper {
		width: 20%;
		height: 100upx;
		position: relative;
	}

	.pic {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 6upx;
	}

	.cover {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		font-size: 36upx;
		color: #fff;
	}

	.introduce {
		display: inline-block;
		padding: 16upx 0;
		font-size: 28upx;
		color: #606266;
		line-height: 38upx;
		margin-left: 80px;margin-top: -120px;
	}

	.bot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80upx;
		font-size: 24upx;
		color: #707070;
		position: relative;
	}

	.more-icon {
		font-size: 32upx;
	}
</style>
