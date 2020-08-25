<template>
	<view style="overflow:auto;overflow-x: hidden">
		<view v-if="imageinfoshow==0">
		<!-- 价格信息 -->
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">网络标价</text>
				<input class="desc" type="text" v-model="carData.network_price" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">展厅标价</text>
				<input class="desc" type="text" v-model="carData.ting_price" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<!-- <view class="yt-list-cell b-b">
				<text class="cell-tit clamp">家选活动价</text>
				<input class="desc" type="text" v-model="carData.ting_price" placeholder="请输入" placeholder-class="placeholder" />
			</view> -->
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">销售底价</text>
				<input class="desc" type="text" v-model="carData.seal_yewu_price" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">销售经理底价</text>
				<input class="desc" type="text" v-model="carData.seal_manage_price" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">批发底价</text>
				<input class="desc" type="text" v-model="carData.wholesale_price" placeholder="请输入" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">含过户费</text>
				<radio class="radio" type="radio" v-model="carData.guohu" name="car_type6" value="0" :checked="bianhao6===0" @click="radio6(0)"/><text style="font-size: 15px;margin-right: 15px;">是</text>
				<radio class="radio" type="radio" v-model="carData.guohu"  name="car_type6" value="1" :checked="bianhao6===1" @click="radio6(1)"/><text style="font-size: 15px;">否</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">支持分期</text>
				<radio class="radio" type="radio" v-model="carData.is_fenqi" name="car_type7" value="0" :checked="bianhao7===0" @click="radio7(0)"/><text style="font-size: 15px;margin-right: 15px;">是</text>
				<radio class="radio" type="radio" v-model="carData.is_fenqi"  name="car_type7" value="1" :checked="bianhao7===1" @click="radio7(1)"/><text style="font-size: 15px;">否</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">首付</text>
				<input class="desc" type="text" v-model="carData.frist_price"  placeholder="请输入" placeholder-class="placeholder" />万元
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">按揭金额</text>
				<input class="desc" type="text" v-model="carData.anjie" placeholder="请输入" placeholder-class="placeholder" />万元
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">按揭期数</text>
				<input class="desc" type="text" v-model="carData.aj_num"  placeholder="请输入" placeholder-class="placeholder" />期
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">每月还款</text>
				<input class="desc" type="text" v-model="carData.price_month"  placeholder="请输入" placeholder-class="placeholder" />元
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<text class="submit" @click="submit">保存</text>
		</view>
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
	// https://github.com/zhetengbiji/mpvue-picker
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	// https://github.com/zhetengbiji/mpvue-citypicker
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue';
	import mpvueCityPicker1 from '@/components/mpvue-citypicker/mpvueCityPicker1.vue'
	import cityData from '@/common/city.data.js';
	export default {
		components: {
		    mpvuePicker,
		    mpvueCityPicker,
			mpvueCityPicker1
		},
		async onLoad(options){
			//this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			let id = options.id;
			console.log('id是'+id);
			if(id){
				const userinfo = uni.getStorageSync('userinfo');
				var _self=this;
				_self.car_id=id;
				_self.userinfo=userinfo;
				_self.access_token=userinfo.access_tokenn;
				console.log('token是'+_self.access_token);
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car/view', 
					data: {
						"access-token":userinfo.access_token,
						"car_id":id
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							console.log('production_date'+res.data.data.car.production_date);
							_self.imageList1=res.data.data.car.image;
							_self.imageList2=res.data.data.car.video;
							_self.imageList3=res.data.data.car.c_image;
							_self.imageList4=res.data.data.car.other_image;
							_self.bianhao1=res.data.data.car.type;
							_self.typeIndex=res.data.data.car.s_type;
							_self.type2Index=res.data.data.car.kc_status;
							_self.carData.vin=res.data.data.car.vin;
							_self.brand_id_one=res.data.data.car.brand_id;
							_self.brand_id_two=res.data.data.car.brand1_id;
							_self.brand_id_three=res.data.data.car.brand_chexin_id;
							_self.brand_title_one=res.data.data.car.brand;
							_self.brand_title_two=res.data.data.car.brand1;
							_self.brand_title_three=res.data.data.car.brand_chexin;
							_self.carData.kilometre=res.data.data.car.kilometre;
							_self.carData.play_cards=res.data.data.car.play_cards;
							_self.color_id=res.data.data.car.color;
							_self.aid=res.data.data.car.appraiser;
							_self.carData.car_card=res.data.data.car.car_card;
							_self.type3Index=res.data.data.car.use_type;
							_self.carData.engine_number=res.data.data.car.engine_number;
							_self.carData.production_date=res.data.data.car.production_date;
							_self.carData.yearly_date=res.data.data.car.yearly_date;
							_self.carData.key_car_num=res.data.data.car.key_car_num;
							_self.carData.intro_condition=res.data.data.car.intro_condition;
							_self.carData.new_car_price=res.data.data.car.new_car_price;
							_self.carData.car_retrofitting=res.data.data.car.car_retrofitting;
							_self.carData.transfer_num=res.data.data.car.transfer_num;
							_self.bianhao3=res.data.data.car.car_xz;
							_self.color_id_nei=res.data.data.car.color_in;
							_self.area_title_one=res.data.data.car.car_prov;
							_self.area_title_two=res.data.data.car.car_city;
							_self.area_title_three=res.data.data.car.car_area;
							_self.area_title_one_gui=res.data.data.car.car_prov_gui;
							_self.area_title_two_gui=res.data.data.car.car_city_gui;
							_self.area_title_three_gui=res.data.data.car.car_area_gui;
							
							_self.area_id_one=res.data.data.car.car_prov_id;
							_self.area_id_two=res.data.data.car.car_city_id;
							_self.area_id_three=res.data.data.car.car_area_id;
							_self.area_id_one_gui=res.data.data.car.car_prov_gui_id;
							_self.area_id_two_gui=res.data.data.car.car_city_gui_id;
							_self.area_id_three_gui=res.data.data.car.car_area_gui_id;
							_self.carData.warning_days=res.data.data.car.warning_days;
							_self.carData.car_number=res.data.data.car.car_number;
							_self.bianhao4=res.data.data.car.car_renzhen;
							_self.carData.qa_month=res.data.data.car.qa_month;
							_self.carData.qa_kilo=res.data.data.car.qa_kilo;
							_self.bianhao5=res.data.data.car.keep_4s;
							_self.carData.keep_log=res.data.data.car.keep_log;
							
							_self.carData.network_price=res.data.data.car.network_price;
							_self.carData.ting_price=res.data.data.car.ting_price;
							_self.carData.seal_yewu_price=res.data.data.car.seal_yewu_price;
							_self.carData.seal_manage_price=res.data.data.car.seal_manage_price;
							_self.carData.wholesale_price=res.data.data.car.wholesale_price;
							_self.bianhao6=res.data.data.car.guohu;
							_self.bianhao7=res.data.data.car.is_fenqi;
							_self.carData.frist_price=res.data.data.car.frist_price;
							_self.carData.anjie=res.data.data.car.anjie;
							_self.carData.aj_num=res.data.data.car.aj_num;
							_self.carData.price_month=res.data.data.car.price_month;
							_self.carData.pi_man=res.data.data.car.pi_man;
							_self.carData.pi_seal_price=res.data.data.car.pi_seal_price;
							_self.bianhao8=res.data.data.car.pi_is_guohu;
							
							_self.carData.mobile=res.data.data.car.mobile;
							_self.carData.guanggaoyu=res.data.data.car.guanggaoyu;
							_self.carData.intro_car=res.data.data.car.intro_car;
							_self.carData.beizhu=res.data.data.car.beizhu;
							
							_self.shui1=res.data.data.shouxu_info.gzsz;
							_self.shui2=res.data.data.shouxu_info.xsz;
							_self.shui3=res.data.data.shouxu_info.djz;
							_self.shui4=res.data.data.shouxu_info.yczsfz;
							_self.shui5=res.data.data.shouxu_info.ycpz;
							_self.shui6=res.data.data.shouxu_info.xcfp;
							_self.shui7=res.data.data.shouxu_info.xczb;
							_self.shui8=res.data.data.shouxu_info.xcbysc;
							_self.shui9=res.data.data.shouxu_info.clsms;
							_self.shui10=res.data.data.shouxu_info.jqxd;
							_self.shui11=res.data.data.shouxu_info.syxd;
							_self.shui12=res.data.data.shouxu_info.ccsz;
							
							_self.carOtherData.assess_bj=res.data.data.customer_info.assess_bj;
							_self.carOtherData.c_appraiser=res.data.data.customer_info.c_appraiser;
							_self.carOtherData.car_id=res.data.data.customer_info.car_id;
							_self.carOtherData.id=res.data.data.customer_info.id;
							_self.carOtherData.price=res.data.data.customer_info.price;
							_self.carOtherData.purchase_date=res.data.data.customer_info.purchase_date;
							_self.carOtherData.purchase_type=res.data.data.customer_info.purchase_type;
							_self.carOtherData.store=res.data.data.customer_info.store;
							_self.carOtherData.yjzbf=res.data.data.customer_info.yjzbf;
							
							_self.carCustomerData.address=res.data.data.procedures.address;
							_self.carCustomerData.bank_card=res.data.data.procedures.bank_card;
							_self.carCustomerData.car_id=res.data.data.procedures.car_id;
							_self.carCustomerData.card=res.data.data.procedures.card;
							_self.type4Index=res.data.data.procedures.from;
							_self.carCustomerData.id=res.data.data.procedures.id;
							_self.bianhao9=res.data.data.procedures.kh_type;
							_self.carCustomerData.mobile=res.data.data.procedures.mobile;
							_self.carCustomerData.name=res.data.data.procedures.name;
							_self.carCustomerData.open_bank=res.data.data.procedures.open_bank;
							_self.carCustomerData.payee=res.data.data.procedures.payee;
							_self.carCustomerData.psy_price=res.data.data.procedures.psy_price;
							_self.carCustomerData.qt_zhanghu=res.data.data.procedures.qt_zhanghu;
							_self.carCustomerData.yixiang=res.data.data.procedures.yixiang;
							_self.type5Index=res.data.data.procedures.yixiang;
							_self.type6Index=res.data.data.procedures.from;
						}else{
							if(res.data.code=== 401){
								uni.navigateTo({
									url: `/pages/public/login`
								})
							}else{
							uni.showToast({
								icon: 'none',
								title: '保存失败',
								duration: 2000
							});
							}
						}
					}
				});
			}
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				car_id:'',
				access_token:'',
				imageinfoshow:0,
				carData:{
					
				},
				carOtherData:{
					
				},
				carCustomerData:{
					
				},
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
				bianhao9:'1',
				type:["选择售卖类型","仅零售","仅批发","可零可批"],
				typeIndex:0,
				type2:["选择库存状态","在途","整备中","在厅","网络在售","转场","外借"],
				type2Index:0,
				type3:["请选择","营运","非营运","营转非","租赁营运","租赁非营运"],
				type3Index:0,
				type4:["请选择","置换","合作","实车寄售","网络寄售","收购"],
				type4Index:0,
				type5:["请选择","H(高意向)","A(中意向)","B(低意向)"],
				type5Index:0,
				type6:["请选择","大公家选","抖音","其他","快手","同行","老客户","车猫","易车二手车","51汽车","百姓","华夏","淘宝","搜狐","58同城","赶集","第一车网","优信二手车","二手车之家","官网","大搜车","朋友介绍","微信","微博","广播","直接到店","咸鱼","微店"],
				type6Index:0,
				date: currentDate,
				time: '12:01',
				date1: currentDate,
				time1: '12:01',
				date2: currentDate,
				time2: '12:01',
				date3: currentDate,
				time3: '12:01',
				
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '请选择',
				pickerText1: '请选择',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				aid:'',
				aidname:'',
				color_id:'',
				color_title:'',
				color_id_nei:'',
				color_title_nei:'',
				cateMaskState:0,
				cateList:[],
				cateMaskState1:0,
				cateMaskState1q:0,
				cateList1:[],
				cateMaskState2:0,
				cateMaskState2q:0,
				cateList2:[],
				cateList3:[],
				cateMaskState5:0,
				cateList4:[],
				cateMaskState6:0,
				cateList5:[],
				cateMaskState7:0,
				cateList6:[],
				cateMaskState8:0,
				cateList7:[],
				cateMaskState9:0,
				cateList8:[],
				cateMaskState10:0,
				cateList9:[],
				cateMaskState11:0,
				cateList10:[],
				cateMaskState12:0,
				cateList11:[],
				cateMaskState13:0,
				shouxu_info:{
					
				},
				caigou_info:[],
				cateMaskState3:0,
				cateMaskState4:0,
				shui1:'1',
				shui2:'1',
				shui3:'1',
				shui4:'1',
				shui5:'1',
				shui6:'1',
				shui7:'1',
				shui8:'1',
				shui9:'1',
				shui10:'1',
				shui11:'1',
				shui12:'1',
				// imageList1:'',
				// imageList2:'',
				// imageList3:'',
				// imageList4:'',
				
				imageList1: [], //保存图片路径集合
				imageLength1: 13, //限制图片张数
				imageList2: '', //保存图片路径集合
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
				// cateMaskStateimage: 0, //分类面板展开状态
				// cateMaskState1image: 0, 
				// cateMaskState2image: 0, 
				filterIndex: 0, 
				headerPosition:"fixed",
				headerTop:'',
				infostate:1,
				area_id_one:'',
				area_title_one:'',
				area_id_two:'',
				area_title_two:'',
				area_id_three:'',
				area_title_three:'',
				
				area_id_one_gui:'',
				area_title_one_gui:'',
				area_id_two_gui:'',
				area_title_two_gui:'',
				area_id_three_gui:'',
				area_title_three_gui:'',
				
				brand_id_one:'',
				brand_title_one:'',
				brand_id_two:'',
				brand_title_two:'',
				brand_id_three:'',
				brand_title_three:'',
				
				cameraList: [{
						value: 'back',
						name: '后置摄像头',
						checked: 'true'
					},
					{
						value: 'front',
						name: '前置摄像头'
					},
				],
				VideoOfImagesShow:true,
				src:"",//视频存放
				cameraIndex: 0,
			}
		},
		methods: {
			//加载分类
			async loadCateList(){
				var _self = this;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car-color/index', 
					data: {
						"access-token":this.access_token,
						"type":1
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							_self.cateList=res.data.data;
							console.log("222111"+_self.cateList)
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
			async loadCateList1(){
				var _self = this;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car-assessment/index', 
					data: {
						"access-token":this.access_token,
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						console.log(res.data.data)
						if(res.data.code=== 200){
							_self.cateList1=res.data.data;
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
			async loadCateList2(){
				var _self = this;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car-color/index', 
					data: {
						"access-token":this.access_token,
						"type":2
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							_self.cateList2=res.data.data;
							console.log("222"+_self.cateList2)
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
			async loadCateList3(){
				var _self = this;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/car/car-brand/index', 
					data: {
						"access-token":this.access_token
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							_self.cateList3=res.data.data;
							console.log("cateList3"+_self.cateList3)
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
			async loadCateList4(){
				var _self = this;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/common/provinces/index', 
					data: {
						"access-token":this.access_token
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							_self.cateList6=res.data.data;
							console.log("cateList6"+_self.cateList6)
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
			async loadCateList5(){
				var _self = this;
				uni.request({
					url: 'http://dg.51jump.cn/merapi/v1/common/provinces/index', 
					data: {
						"access-token":this.access_token
					},
					method:"get",
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: function (res) {
						if(res.data.code=== 200){
							_self.cateList9=res.data.data;
							console.log("cateList9"+_self.cateList9)
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
			uplevel(id,title,level,type){
				var _self = this;
				if(level==1){
					_self.brand_id_one=id;
					_self.brand_title_one=title;
					uni.request({
						url: 'http://dg.51jump.cn/merapi/v1/car/car-brand/index', 
						data: {
							"access-token":this.access_token,
							"brandid":id
						},
						method:"get",
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: function (res) {
							if(res.data.code=== 200){
								_self.cateList4=res.data.data;
								console.log("cateList4"+_self.cateList4)
								if(type==='show'){
								_self.cateMaskState6 = 1;
								}else{
									_self.cateMaskState6 = 0;
								}
							}
						}
					});
				}else if(level==2){
					_self.brand_id_two=id;
					_self.brand_title_two=title;
					uni.request({
						url: 'http://dg.51jump.cn/merapi/v1/car/car-brand/index', 
						data: {
							"access-token":this.access_token,
							"series_id":id
						},
						method:"get",
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: function (res) {
							if(res.data.code=== 200){
								_self.cateList5=res.data.data;
								console.log("cateList5"+_self.cateList5)
								if(type==='show'){
								_self.cateMaskState7 = 1;
								}else{
									_self.cateMaskState7 = 0;
								}
							}
						}
					});
				}
			},
			uplevell(id,title,level,type){
				var _self = this;
				if(level==1){
					_self.area_id_one=id;
					_self.area_title_one=title;
					uni.request({
						url: 'http://dg.51jump.cn/merapi/v1/common/provinces/index', 
						data: {
							"access-token":this.access_token,
							"pid":id
						},
						method:"get",
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: function (res) {
							if(res.data.code=== 200){
								_self.cateList7=res.data.data;
								console.log("cateList7"+_self.cateList7)
								if(type==='show'){
								_self.cateMaskState9 = 1;
								}else{
									_self.cateMaskState9 = 0;
								}
							}
						}
					});
				}else if(level==2){
					_self.area_id_two=id;
					_self.area_title_two=title;
					uni.request({
						url: 'http://dg.51jump.cn/merapi/v1/common/provinces/index', 
						data: {
							"access-token":this.access_token,
							"pid":id
						},
						method:"get",
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: function (res) {
							if(res.data.code=== 200){
								_self.cateList8=res.data.data;
								console.log("cateList8"+_self.cateList8)
								if(type==='show'){
								_self.cateMaskState10 = 1;
								}else{
									_self.cateMaskState10 = 0;
								}
							}
						}
					});
				}
			},
			uplevelll(id,title,level,type){
				var _self = this;
				if(level==1){
					_self.area_id_one_gui=id;
					_self.area_title_one_gui=title;
					uni.request({
						url: 'http://dg.51jump.cn/merapi/v1/common/provinces/index', 
						data: {
							"access-token":this.access_token,
							"pid":id
						},
						method:"get",
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: function (res) {
							if(res.data.code=== 200){
								_self.cateList10=res.data.data;
								console.log("cateList10"+_self.cateList10)
								if(type==='show'){
								_self.cateMaskState12 = 1;
								}else{
									_self.cateMaskState12 = 0;
								}
							}
						}
					});
				}else if(level==2){
					_self.area_id_two_gui=id;
					_self.area_title_two_gui=title;
					uni.request({
						url: 'http://dg.51jump.cn/merapi/v1/common/provinces/index', 
						data: {
							"access-token":this.access_token,
							"pid":id
						},
						method:"get",
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: function (res) {
							if(res.data.code=== 200){
								_self.cateList11=res.data.data;
								console.log("cateList11"+_self.cateList11)
								if(type==='show'){
								_self.cateMaskState13 = 1;
								}else{
									_self.cateMaskState13 = 0;
								}
							}
						}
					});
				}
			},
			changesub(id,title){
				var _self = this;
				_self.area_id_three=id;
				_self.area_title_three=title;
				_self.cateMaskState8=0;
				_self.cateMaskState9=0;
				_self.cateMaskState10=0;
				console.log("所在地"+_self.area_title_one+_self.area_title_two+_self.area_title_three)
			},
			changesub1(id,title){
				var _self = this;
				_self.area_id_three_gui=id;
				_self.area_title_three_gui=title;
				_self.cateMaskState11=0;
				_self.cateMaskState12=0;
				_self.cateMaskState13=0;
				console.log("归属地"+_self.area_title_one_gui+_self.area_title_two_gui.self.area_title_three_gui)
			},
			changesub2(id,title){
				var _self = this;
				_self.brand_id_three=id;
				_self.brand_title_three=title;
				_self.cateMaskState5=0;
				_self.cateMaskState6=0;
				_self.cateMaskState7=0;
				console.log("品牌"+_self.brand_title_one+_self.brand_title_two+_self.brand_title_three)
			},
			//显示分类面板
			toggleCateMask(type){
				this.loadCateList();
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState = 2;
				setTimeout(()=>{
					this.cateMaskState = state;
					this.cateMaskState1q = 0;
					this.cateMaskState2q = 0;
				}, timer)
			},
			toggleCateMask1(type){
				this.loadCateList1();
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState1q = 2;
				setTimeout(()=>{
					this.cateMaskState1q = state;
					this.cateMaskState = 0;
					this.cateMaskState2q = 0;
				}, timer)
			},
			toggleCateMask1q(type){
				this.loadCateList1();
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState1q = 2;
				setTimeout(()=>{
					this.cateMaskState1q = state;
					this.cateMaskState = 0;
					this.cateMaskState2q = 0;
				}, timer)
			},
			toggleCateMask2q(type){
				this.loadCateList2();
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState2q = 2;
				setTimeout(()=>{
					this.cateMaskState2q = state;
					this.cateMaskState1q = 0;
					this.cateMaskState = 0;
				}, timer)
			},
			toggleCateMask3(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState3 = 2;
				setTimeout(()=>{
					this.cateMaskState3 = state;
				}, timer)
			},
			toggleCateMask4(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState4 = 2;
				setTimeout(()=>{
					this.cateMaskState4 = state;
				}, timer)
			},
			toggleCateMask5(type){
				this.loadCateList3();
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState5 = 2;
				setTimeout(()=>{
					this.cateMaskState5 = state;
				}, timer)
			},
			toggleCateMask6(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState6 = 2;
				setTimeout(()=>{
					this.cateMaskState6 = state;
				}, timer)
			},
			toggleCateMask7(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState7 = 2;
				setTimeout(()=>{
					this.cateMaskState7 = state;
				}, timer)
			},
			toggleCateMask8(type){
				this.loadCateList4();
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState8 = 2;
				setTimeout(()=>{
					this.cateMaskState8 = state;
				}, timer)
			},
			toggleCateMask9(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState9 = 2;
				setTimeout(()=>{
					this.cateMaskState9 = state;
				}, timer)
			},
			toggleCateMask10(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState10 = 2;
				setTimeout(()=>{
					this.cateMaskState10 = state;
				}, timer)
			},
			toggleCateMask11(type){
				this.loadCateList5();
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState11 = 2;
				setTimeout(()=>{
					this.cateMaskState11 = state;
				}, timer)
			},
			toggleCateMask12(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState12 = 2;
				setTimeout(()=>{
					this.cateMaskState12 = state;
				}, timer)
			},
			toggleCateMask13(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState13 = 2;
				setTimeout(()=>{
					this.cateMaskState13 = state;
				}, timer)
			},
			//分类点击
			changeCate(color_id,color_title){
				this.color_id=color_id;
				this.color_title = color_title;
				this.toggleCateMask();
			},
			changeCate1(aid,aidname){
				this.aid=aid;
				this.aidname = aidname;
				this.toggleCateMask();
			},
			changeCate2(color_id_nei,color_title_nei){
				this.color_id_nei=color_id_nei;
				this.color_title_nei = color_title_nei;
				this.toggleCateMask();
			},
			changeCate3(){
				this.shouxu_info.gzsz=this.shui1;
				this.shouxu_info.xsz=this.shui2;
				this.shouxu_info.djz=this.shui3;
				this.shouxu_info.yczsfz=this.shui4;
				this.shouxu_info.ycpz=this.shui5;
				this.shouxu_info.xcfp=this.shui6;
				this.shouxu_info.xczb=this.shui7;
				this.shouxu_info.xcbysc=this.shui8;
				this.shouxu_info.clsms=this.shui9;
				this.shouxu_info.jqxd=this.shui10;
				this.shouxu_info.syxd=this.shui11;
				this.shouxu_info.ccsz=this.shui12;
				// this.shouxu_info.push(this.shui1);
				// this.shouxu_info.push(this.shui2);
				// this.shouxu_info.push(this.shui3);
				// this.shouxu_info.push(this.shui4);
				// this.shouxu_info.push(this.shui5);
				// this.shouxu_info.push(this.shui6);
				// this.shouxu_info.push(this.shui7);
				// this.shouxu_info.push(this.shui8);
				// this.shouxu_info.push(this.shui9);
				// this.shouxu_info.push(this.shui10);
				// this.shouxu_info.push(this.shui11);
				// this.shouxu_info.push(this.shui12);
				this.toggleCateMask3();
				console.log('shouwinfo:'+this.shouxu_info)
			},
			changeCate4(){
				this.carOtherData.c_appraiser=this.aid;
				this.toggleCateMask4();
			},
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
				let data = this.carData;
				console.log(this.access_token);
				console.log(JSON.stringify(data))
				const userinfo = uni.getStorageSync('userinfo');
				uni.request({
				    url: 'http://dg.51jump.cn/merapi/v1/car/car/update?id='+this.car_id+'&access-token='+userinfo.access_token, //仅为示例，并非真实接口地址。
				    data: JSON.stringify(data),
					method:"post",
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: function (res) {
						if(res.data.code=== 200){
							const data=res.data.data;
							console.log("穿的数据："+this.carData);
							console.log("返回状态1："+data);
							uni.navigateTo({
								url: '/pages/car/list'
							})
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
			carphoto(e){
				if(e==='1'){
					// uni.navigateTo({
					// 	url: '/pages/image/image?type=1'
					// })
					this.infostate=1;
					this.filterIndex=0;
					this.imageinfoshow=1;
				}else if(e==='2'){
					// uni.navigateTo({
					// 	url: '/pages/image/image?type=2'
					// })
					this.infostate=2;
					this.filterIndex=1;
					this.imageinfoshow=1;
				}else{
					// uni.navigateTo({
					// 	url: '/pages/image/image?type=3'
					// })
					this.infostate=3;
					this.filterIndex=2;
					this.imageinfoshow=1;
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
				this.carData.car_renzhen=e;
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
				this.carData.pi_is_guohu=e;
			},
			radio9(e){
				//console.log("xuanzho"+e);
				this.bianhao9=e;
				this.carCustomerData.kh_type=e;
			},
			typeChange:function(e){
			this.typeIndex = e.detail.value;
			},
			type2Change:function(e){
			this.type2Index = e.detail.value;
			this.carData.kc_status=e.detail.value;
			},
			type3Change:function(e){
			this.type3Index = e.detail.value;
			},
			type4Change:function(e){
			this.type4Index = e.detail.value;
			},
			type5Change:function(e){
			this.type5Index = e.detail.value;
			this.carCustomerData.yixiang=this.type5[this.type5Index];
			},
			type6Change:function(e){
			this.type6Index = e.detail.value;
			this.carCustomerData.from=this.type6[this.type6Index];
			},
			bindDateChange: function(e) {
				this.date = e.target.value;
				this.carData.production_date= e.target.value;
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
				this.carData.yearly_date= e.target.value;
			},
			getDate1(type) {
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
			bindDateChange2: function(e) {
				this.date2 = e.target.value;
				this.carData.play_cards= e.target.value;
			},
			getDate2(type) {
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
			bindDateChange3: function(e) {
				this.date3 = e.target.value
			},
			getDate3(type) {
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
			// 三级联动选择
			showMulLinkageThreePicker() {
			    this.$refs.mpvueCityPicker.show()
			},
			showMulLinkageThreePicker1() {
			    this.$refs.mpvueCityPicker1.show()
			},
			onConfirm(e) {
			    this.pickerText = e.label;
				this.carData.car_prov_gui= e.label;
			},
			onConfirm1(e) {
			    this.pickerText1 = e.label;
				this.carData.car_prov= e.label;
			},
			radio10(e){
				//console.log("xuanzho"+e);
				this.shui1=e;
			},
			radio101(e){
				//console.log("xuanzho"+e);
				this.shui2=e;
			},
			radio102(e){
				//console.log("xuanzho"+e);
				this.shui3=e;
			},
			radio103(e){
				//console.log("xuanzho"+e);
				this.shui4=e;
			},
			radio104(e){
				//console.log("xuanzho"+e);
				this.shui5=e;
			},
			radio105(e){
				//console.log("xuanzho"+e);
				this.shui6=e;
			},
			radio106(e){
				//console.log("xuanzho"+e);
				this.shui7=e;
			},
			radio107(e){
				//console.log("xuanzho"+e);
				this.shui8=e;
			},
			radio108(e){
				//console.log("xuanzho"+e);
				this.shui9=e;
			},
			radio109(e){
				//console.log("xuanzho"+e);
				this.shui10=e;
			},
			radio110(e){
				//console.log("xuanzho"+e);
				this.shui11=e;
			},
			radio111(e){
				//console.log("xuanzho"+e);
				this.shui12=e;
			},
			
			
			
			//选择图片
			chooseImage1: async function() {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
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
				// uni.chooseVideo({
				// 	maxDuration:1000,
				// 	count: 1,
				// 	camera: this.cameraList[this.cameraIndex].value,
				// 	sourceType: sourceType[this.sourceTypeIndex],
				// 	success: (res) => {
				// 		// console.log(JSON.stringify(res.tempFilePath),'视频')
				// 		var videofile=res.tempFilePath.split(' ');
				// 		console.log(videofile,'视频www')
				// 		uni.uploadFile({
				// 			url: 'http://dg.51jump.cn/merapi/v1/file/videos?access-token='+this.access_token,
				// 			filePath: videofile[0],
				// 			name: 'file',
				// 			success: (uploadFileRes) => {
				// 				this.imageList2 = this.imageList2.concat(JSON.parse(uploadFileRes.data).data.url);
				// 				console.log('视频是：'+this.imageList2)
				// 			}
				// 		});
				// 	}
				// })
				uni.chooseVideo({  //　视频是一次上传一个
						success: (res) => {
						    const tempFilePath = res.tempFilePath;// 注意这里没有最后面的s了 
						    uni.uploadFile({
								url: 'http://dg.51jump.cn/merapi/v1/file/videos?access-token='+this.access_token,
						        filePath: tempFilePath,
						        name: 'file',
						        formData: {　　// 携带视频的描述等等
						            'name': 'demo.mp4',
									'type':'video'
						        },
						        success: (uploadFileRes) => {
						            this.imageList2 = JSON.parse(uploadFileRes.data).data.url;
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
			//删除视频
			deleteImage2: function(e) {
				var that = this;
				that.imageList2 = ''
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
			toggleCateMaskimage(type){
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
			toggleCateMask1image(type){
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
			toggleCateMask2image(type){
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
			submitimag(){
				// uni.navigateTo({
				// 	url:'/pages/car/create?imageList1='+this.imageList1+'&imageList2='+this.imageList2+'&imageList3='+this.imageList3+'&imageList4='+this.imageList4
				// })
				this.imageinfoshow=0;
				console.log("111车辆图片："+this.imageList1)
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
		// position: fixed;
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
	
	/* 分类 */
	.cate-mask{
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 95;
		transition: .3s;
		
		.cate-content{
			width: 630upx;
			height: 100%;
			background: #fff;
			float:right;
			transform: translateX(100%);
			transition: .3s;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.cate-content{
				transform: translateX(0);
			}
		}
	}
	.cate-list{
		display: flex;
		flex-direction: column;
		height: 100%;
		.cate-item{
			display: flex;
			align-items: center;
			height: 90upx;
			padding-left: 30upx;
			font-size: 28upx;
			color: #555;
			position: relative;
		}
		.two{
			height: 64upx;
			color: #303133;
			font-size: 30upx;
			background: white;
		}
		.active{
			color: $base-color;
		}
	}
</style>



<!-- 图片上传 -->
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
		/* position: fixed; */
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

