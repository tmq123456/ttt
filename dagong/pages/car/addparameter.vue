<template>
	<view style="overflow:auto;overflow-x: hidden">
		<view class="container">
			<view style="font-size: 12px;color: grey;">基本参数</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">排量(L)</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" value="111"/>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">变速箱类型</text>
				<picker :range="type" @change="typeChange">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type[typeIndex] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">燃料形式</text>
				<picker :range="type2" @change="type2Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type2[type2Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车身结构</text>
				<picker :range="type3" @change="type3Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type3[type3Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">座位数</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" value="111"/>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">排放标准</text>
				<picker :range="type4" @change="type4Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type4[type4Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">进气方式</text>
				<picker :range="type5" @change="type5Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type5[type5Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">加装配置</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" value="111"/>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">亮点配置</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" value="111"/>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">原厂质保年限</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" value="111"/>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">原厂质保里程</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" value="111"/>
			</view>
			<view style="font-size: 12px;color: grey;">主/被动安全装置</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">主/副驾驶座安全气囊</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">主</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">副</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">无</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前/后排侧气囊</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">前</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">后</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">无</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前/后排头部气囊</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">前</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">后</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">无</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">膝部气囊</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">胎压监测装置</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">零胎压继续行驶</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">安全带未系提示</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">ISOFIX儿童座椅接口</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">ABS防抱死</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">制动力分配</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">刹车辅助</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">牵引力控制</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车身稳定控制</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">并线辅助</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车道偏离预警系统</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">主动刹车/主动安全系统</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">夜视系统</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view style="font-size: 12px;color: grey;">辅助/操控配置</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前驻车雷达</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后驻车雷达</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">倒车视频影像</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">全景摄像头</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">定速巡航</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">自适应巡航</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">自动泊车入位</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">发动机启停技术</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">上坡辅助</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">自动驻车</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">陡坡缓降</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">可变悬架</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">软硬调节</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">高低调节</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">无</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">空气悬架</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">可变转向比</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前桥限滑差速器/差速锁</text>
				<picker :range="type6" @change="type6Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type6[type6Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">中央差速器锁止功能</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后桥限滑差速器/差速锁</text>
				<picker :range="type7" @change="type7Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type7[type7Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">整体主动转向系统</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view style="font-size: 12px;color: grey;">外部/防盗配置</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">电动天窗</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">全景天窗</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">运动外观套件</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">铝合金轮圈</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">电动吸合门</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">侧滑门</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">电动后备箱</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">感应后备箱</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车顶行李架</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">发动机电子防盗</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车内中控锁</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">遥控钥匙</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">无钥匙启动系统</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">无钥匙进入系统</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view style="font-size: 12px;color: grey;">内部配置</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">真皮方向盘</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">方向盘调节</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">方向盘电动调节</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">多功能方向盘</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">方向盘换挡</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">方向盘加热</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">方向盘记忆</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">行车电脑显示屏</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">全液晶仪表盘</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">HUD抬头数字显示</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view style="font-size: 12px;color: grey;">座椅配置</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">座椅材质</text>
				<picker :range="type8" @change="type8Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type8[type8Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">运动风格座椅</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">座椅高低调节</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">腰部支撑调节</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">肩部支撑调节</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">主/副驾驶座电动调节调节</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">第二排靠背角度调节</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">第二排座椅移动</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后排座椅电动调节</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">电动座椅记忆</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前排座椅通风</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后排座椅通风</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前排座椅加热</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后排座椅加热</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前/后排座椅按摩</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">第三排座椅</text>
				<picker :range="type9" @change="type9Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type9[type9Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后排座椅放倒方式</text>
				<picker :range="type10" @change="type10Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type10[type10Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前/后中央扶手</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后排杯架</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view style="font-size: 12px;color: grey;">多媒体配置</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">GPS导航系统</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">定位互动服务</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">中控台彩色大屏</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">中控液晶屏分屏显示</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">蓝牙/车载电话</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车载电视</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后排液晶屏</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">220V/230V电源</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">外接音源接口</text>
				<picker :range="type11" @change="type11Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type11[type11Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">多媒体系统</text>
				<picker :range="type12" @change="type12Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type12[type12Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">扬声器品牌</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" value="111"/>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">扬声器数量</text>
				<input class="desc" type="text" placeholder="请输入" placeholder-class="placeholder" value="111"/>
			</view>
			<view style="font-size: 12px;color: grey;">灯光配置</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">近光灯</text>
				<picker :range="type13" @change="type13Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type13[type13Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">远光灯</text>
				<picker :range="type14" @change="type14Change">
				    <text class="cell-more wanjia wanjia-gengduo-d" style="margin-left: 250px;font-size: 15px;">{{ type14[type14Index] }}</text> 
				</picker>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">日间行车灯</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">自适应远光灯</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">自动头灯</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">转向辅助灯</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">转向头灯</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前雾灯</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">大灯高度可调</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">大灯清洗装置</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车内氛围灯</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view style="font-size: 12px;color: grey;">玻璃/后视镜</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">前后电动车窗</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">前</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">后</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车窗防夹手功能</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">防紫外线/隔热玻璃</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后视镜电动调节</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后视镜加热</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">内/外后视镜自动防眩目</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">内</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">外</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">无</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后视镜电动折叠</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后视镜记忆</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后风挡遮阳帘</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后排侧隐私玻璃</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">遮阳板化妆镜</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后雨刷</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">感应雨刷</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view style="font-size: 12px;color: grey;">空调/冰箱</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">空调控制方式</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">自动</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">手动</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后排独立空调</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">后排出风口</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">温度分区控制</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车内空气调节/花粉过滤</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">车载冰箱</text>
				<radio class="radio" type="radio" name="car_type1" value="1" :checked="bianhao1==='1'" @click="radio1('1')"/><text style="font-size: 15px;">有</text>
				<radio class="radio" type="radio" name="car_type1" value="2" :checked="bianhao1==='2'" @click="radio1('2')"/><text style="font-size: 15px;">无</text>
				<radio class="radio" type="radio" name="car_type1" value="3" :checked="bianhao1==='3'" @click="radio1('3')"/><text style="font-size: 15px;">加装</text>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<text class="submit" @click="submit">保存</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
							format: true
						});
						const currentDate1 = this.getDate1({
										format: true
									})
			return {
				maskState: 0, //优惠券面板显示状态
				desc: '', //备注
				payType: 1, //1微信 2支付宝
				couponList: [
					'仅零售',
					'仅批发',
					'可零可批'
				],
				addressData: {
					name: '许小星',
					mobile: '13853989563',
					addressName: '金九大道',
					address: '山东省济南市历城区',
					area: '149号',
					default: false
				},
				bianhao1:'1',
				bianhao2:'1',
				bianhao3:'2',
				bianhao4:'1',
				bianhao5:'1',
				bianhao6:'1',
				bianhao7:'1',
				bianhao8:'1',
				type:["选择","手自一体变速箱","自动变速箱","无极变速箱","双离合变速箱","手动变速箱","电子无极变速箱","机械师自动变速箱","序列变速箱","序列变速箱(AMT)","ISR变速箱","固定齿比变速箱"],
				typeIndex:0,
				type2:["选择","CNG","柴油/甲醛双燃料","汽油,CNG","柴油/NG双燃料","汽油/NG两用燃料","双燃料：汽油和CNG","电","柴油/NG混合动力","CNG/电混合动力","LNG/电混合动力，CNG/电混合动力","甲醛","燃料电池","汽油混合动力","电动","汽油+48V轻混系统","插电式天然气混合动力","NG","柴油混合动力","LNG","LNG,CNG","插电式NG混合动力","氢气","汽油/电混合动力","汽油和CNG两用燃料","汽油/CNG两用燃料","CNG,LNG","汽油/LPG两用燃料","汽油/CNG双燃料","LNG/点混合动力","汽油，NG","NG/电混合动力","NG混合动力","汽油","柴油","油电混合","增程式","插电式混合动力","纯电动","氢燃料电池","48V轻混系统","油气混合","汽油/LNG两用燃料","甲醛（M100）","柴油/电混合动力","柴油/LNG双燃料","汽油混合动力","汽油和NG两用燃料"],
				type2Index:0,
				type3:["请选择","SUV跨界车","三厢跨界车","旅行跨界车","皮卡","客车","货车","5门5座SUV","5门7座SUV","4门5座三厢车","2门4座硬顶敞篷车","2门4座软顶敞篷车","5门5座两厢车","2门2座软顶敞篷车","三厢车","硬顶敞篷车","两厢车","SUV","软顶敞篷车","硬顶跑车","旅行车","掀背车","MPV","2门4座硬顶跑车","两厢跨界车"],
				type3Index:0,
				type4:["请选择","国I","国II","国III","国IV","国V","国VI"],
				type4Index:0,
				type5:["请选择","自然吸气","涡轮增压II","高压共轨","双涡轮增压","进气形式","机械增压","四涡轮增压","机械+涡轮增压","涡轮 机械双增压","增压"],
				type5Index:0,
				type6:["请选择","差速锁","限滑差速器","限滑差速器+差速锁"],
				type6Index:0,
				type7:["请选择","差速锁","限滑差速器","限滑差速器+差速锁"],
				type7Index:0,
				type8:["请选择","织物","真皮","仿皮","皮/织物混搭","仿皮/真皮","织物/真皮","皮/织物混搭/仿皮"],
				type8Index:0,
				type9:["无","1座","2座","3座"],
				type9Index:0,
				type10:["无","比例放倒","整体"],
				type10Index:0,
				type11:["无","AUX","USB","SD卡槽","HDMI"],
				type11Index:0,
				type12:["无","单碟CD","多跌CD","单碟DVD","多跌DVD"],
				type12Index:0,
				type13:["无","氙气","LED","卤素","激光"],
				type13Index:0,
				type14:["无","氙气","LED","卤素","激光"],
				type14Index:0,
				date: currentDate,
				time: '12:01',
				date1: currentDate1,
				time1: '12:01'
			}
		},
		onLoad(option){
			//商品数据
			//let data = JSON.parse(option.data);
			//console.log(data);
		},
		methods: {
			//显示优惠券面板
			toggleMask(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.maskState = 2;
				setTimeout(()=>{
					this.maskState = state;
				}, timer)
			},
			numberChange(data) {
				this.number = data.number;
			},
			changePayType(type){
				this.payType = type;
			},
			submit(){
				uni.redirectTo({
					//url: '/pages/money/pay'
				})
			},
			carphoto(e){
				if(e==='1'){
					uni.navigateTo({
						url: '/pages/image/image?type=1'
					})
				}else if(e==='2'){
					uni.navigateTo({
						url: '/pages/image/image?type=2'
					})
				}else{
					uni.navigateTo({
						url: '/pages/image/image?type=3'
					})
				}
			},
			stopPrevent(){},
			radio1(e){
				//console.log("xuanzho"+e);
				this.bianhao1=e;
			},
			radio2(e){
				//console.log("xuanzho"+e);
				this.bianhao2=e;
			},
			radio3(e){
				//console.log("xuanzho"+e);
				this.bianhao3=e;
			},
			radio4(e){
				//console.log("xuanzho"+e);
				this.bianhao4=e;
			},
			radio5(e){
				//console.log("xuanzho"+e);
				this.bianhao5=e;
			},
			radio6(e){
				//console.log("xuanzho"+e);
				this.bianhao6=e;
			},
			radio7(e){
				//console.log("xuanzho"+e);
				this.bianhao7=e;
			},
			radio8(e){
				//console.log("xuanzho"+e);
				this.bianhao8=e;
			},
			typeChange:function(e){
			this.typeIndex = e.detail.value;
			},
			type2Change:function(e){
			this.type2Index = e.detail.value;
			},
			type3Change:function(e){
			this.type3Index = e.detail.value;
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
 
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange1: function(e) {
				this.date1 = e.target.value;
			},
			getDate1(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let hour =date.getHours();
				let minute=date.getMinutes();
			 
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}-${hour}-${minute}`;
			},
			switchChange(e){
				let statusTip = e.detail.value ? '打开': '关闭';
				this.$api.msg(`${statusTip}消息提醒`);
			},
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-bottom: 100upx;
	}

	.address-section {
		padding: 30upx 0;
		background: #fff;
		position: relative;

		.order-content {
			display: flex;
			align-items: center;
		}

		.icon-shouhuodizhi {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90upx;
			color: #888;
			font-size: 44upx;
		}

		.cen {
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 28upx;
			color: $font-color-dark;
		}

		.name {
			font-size: 34upx;
			margin-right: 24upx;
		}

		.address {
			margin-top: 16upx;
			margin-right: 20upx;
			color: $font-color-light;
		}

		.icon-you {
			font-size: 32upx;
			color: $font-color-light;
			margin-right: 30upx;
		}

		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}

	.goods-section {
		margin-top: 16upx;
		background: #fff;
		padding-bottom: 1px;

		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
		}

		.logo {
			display: block;
			width: 50upx;
			height: 50upx;
			border-radius: 100px;
		}

		.name {
			font-size: 30upx;
			color: $font-color-base;
			margin-left: 24upx;
		}

		.g-item {
			display: flex;
			margin: 20upx 30upx;

			image {
				flex-shrink: 0;
				display: block;
				width: 140upx;
				height: 140upx;
				border-radius: 4upx;
			}

			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
			}

			.title {
				font-size: 30upx;
				color: $font-color-dark;
			}

			.spec {
				font-size: 26upx;
				color: $font-color-light;
			}

			.price-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: $font-color-dark;
				padding-top: 10upx;

				.price {
					margin-bottom: 4upx;
				}
				.number{
					font-size: 26upx;
					color: $font-color-base;
					margin-left: 20upx;
				}
			}

			.step-box {
				position: relative;
			}
		}
	}
	.yt-list {
		margin-top: 16upx;
		background: #fff;
	}

	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 30upx 10upx 40upx;
		line-height: 70upx;
		position: relative;
		
		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
		}

		.cell-icon {
			height: 32upx;
			width: 32upx;
			font-size: 22upx;
			color: #fff;
			text-align: center;
			line-height: 32upx;
			background: #f85e52;
			border-radius: 4upx;
			margin-right: 12upx;

			&.hb {
				background: #ffaa0e;
			}

			&.lpk {
				background: #3ab54a;
			}

		}

		.cell-more {
			align-self: center;
			font-size: 24upx;
			color: $font-color-light;
			margin-left: 8upx;
			margin-right: -10upx;
		}

		.cell-tit {
			flex: 1;
			font-size: 26upx;
			color: #303133;
			margin-right: 10upx;
			font-weight: bold;
			margin-right: -140px;
		}

		.cell-tip {
			font-size: 26upx;
			color: $font-color-dark;
				
			&.disabled {
				color: $font-color-light;
			}

			&.active {
				color: $base-color;
			}
			&.red{
				color: $base-color;
			}
		}

		&.desc-cell {
			.cell-tit {
				max-width: 90upx;
			}
		}

		.desc {
			flex: 1;
			font-size: $font-base;
			color: $font-color-dark;
		}
	}
	
	/* 支付列表 */
	.pay-list{
		padding-left: 40upx;
		margin-top: 16upx;
		background: #fff;
		.pay-item{
			display: flex;
			align-items: center;
			padding-right: 20upx;
			line-height: 1;
			height: 110upx;	
			position: relative;
		}
		.icon-weixinzhifu{
			width: 80upx;
			font-size: 40upx;
			color: #6BCC03;
		}
		.icon-alipay{
			width: 80upx;
			font-size: 40upx;
			color: #06B4FD;
		}
		.icon-xuanzhong2{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60upx;
			height: 60upx;
			font-size: 40upx;
			color: $base-color;
		}
		.tit{
			font-size: 32upx;
			color: $font-color-dark;
			flex: 1;
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
	
	/* 优惠券面板 */
	.mask{
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 9995;
		transition: .3s;
		
		.mask-content{
			width: 100%;
			min-height: 30vh;
			max-height: 70vh;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y:scroll;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.mask-content{
				transform: translateY(0);
			}
		}
	}

	/* 优惠券列表 */
	.coupon-item{
		display: flex;
		flex-direction: column;
		margin: 20upx 24upx;
		background: #fff;
		.con{
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;
			&:after{
				position: absolute;
				left: 0;
				bottom: 0;
				content: '';
				width: 100%;
				height: 0;
				border-bottom: 1px dashed #f3f3f3;
				transform: scaleY(50%);
			}
		}
		.left{
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			height: 100upx;
		}
		.title{
			font-size: 32upx;
			color: $font-color-dark;
			margin-bottom: 10upx;
		}
		.time{
			font-size: 24upx;
			color: $font-color-light;
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: $font-color-base;
			height: 100upx;
		}
		.price{
			font-size: 44upx;
			color: $base-color;
			&:before{
				content: '￥';
				font-size: 34upx;
			}
		}
		.tips{
			font-size: 24upx;
			color: $font-color-light;
			line-height: 60upx;
			padding-left: 30upx;
		}
		.circle{
			position: absolute;
			left: -6upx;
			bottom: -10upx;
			z-index: 10;
			width: 20upx;
			height: 20upx;
			background: #f3f3f3;
			border-radius: 100px;
			&.r{
				left: auto;
				right: -6upx;
			}
		}
	}
/* 十字架 */
	.cross {
		height: 88upx;
		width: 88upx;
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	 .cross .transverse-line {
		height: 100%;
		width: 48%;
		position: absolute;
		border-right: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
	 
	.cross .vertical-line {
		height: 48%;
		width: 100%;
		position: absolute;
		border-bottom: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
	.add-view {
		height: 185upx;
		width: 185upx;
		margin: 15upx 15upx 15upx 50upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.00);
		border: 3upx dashed #979797;
		border-radius: 8upx;
	}
</style>
