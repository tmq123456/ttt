/*接口域名*/
const open_url="";
/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/temp/banner3.jpg",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "/static/temp/banner2.jpg",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "/static/temp/banner4.jpg",
		background: "rgb(183, 73, 69)",
	}
]
/* 商品列表 */
const goodsList = [{
		image: "http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
		image2: "http://image.baishangtong.cn/202004022426IMG_1227(20200402-160035).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
		image3: "http://image.baishangtong.cn/202004024146IMG_1228(20200402-160125).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
		title: "奥迪TT 2015款 TT Coupe 45 TFSI",
		price: 30.8,
		sales: 61,
	},
	{
			image: "http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
			image2: "http://image.baishangtong.cn/202004022426IMG_1227(20200402-160035).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
			image3: "http://image.baishangtong.cn/202004024146IMG_1228(20200402-160125).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
			title: "奥迪TT 2015款 TT Coupe 45 TFSI",
			price: 30.8,
			sales: 61,
		},
		{
				image: "http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
				image2: "http://image.baishangtong.cn/202004022426IMG_1227(20200402-160035).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
				image3: "http://image.baishangtong.cn/202004024146IMG_1228(20200402-160125).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
				title: "奥迪TT 2015款 TT Coupe 45 TFSI",
				price: 30.8,
				sales: 61,
			},
			{
					image: "http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
					image2: "http://image.baishangtong.cn/202004022426IMG_1227(20200402-160035).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
					image3: "http://image.baishangtong.cn/202004024146IMG_1228(20200402-160125).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
					title: "奥迪TT 2015款 TT Coupe 45 TFSI",
					price: 30.8,
					sales: 61,
				},
				{
						image: "http://image.baishangtong.cn/202004024995IMG_1226(20200402-160025).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
						image2: "http://image.baishangtong.cn/202004022426IMG_1227(20200402-160035).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
						image3: "http://image.baishangtong.cn/202004024146IMG_1228(20200402-160125).JPG?imageView2/1/w/854/h/569/q/100%7Cimageslim",
						title: "奥迪TT 2015款 TT Coupe 45 TFSI",
						price: 30.8,
						sales: 61,
					},
					
]

/* 购物车 */
const cartList = [{
		id: 1,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg',
		attr_val: '春装款 L',
		stock: 15,
		title: 'OVBE 长袖风衣',
		price: 278.00,
		number: 1
	},
	{
		id: 3,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 3,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 5
	},
	{
		id: 4,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 5,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 6,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 7,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 8,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 15,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 1
	},
	{
		id: 9,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 10,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 11,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 12,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 13,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
		attr_val: '春装款/m',
		stock: 15,
		title: '女装2019春秋新款',
		price: 420.00,
		number: 1
	}
];
//详情展示页面
const detailData = {
	title: '纯种金毛幼犬活体有血统证书',
	title2: '拆家小能手 你值得拥有',
	favorite: true,
	imgList: [{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
		},
		{
			src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
		},
	],
	episodeList: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	],
	guessList: [{
			src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
			title: '猫眼指甲油',
			title2: '独树一帜的免照灯猫眼指甲'
		},
		{
			src: 'http://m.china-7.net/uploads/14778449362891.jpg',
			title: '创意屋',
			title2: '创意屋形上下双层高低床'
		},
		{
			src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg',
			title: 'MissCandy 指甲油',
			title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg	',
			title: 'RMK 2017星空海蓝唇釉',
			title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。'
		}
	],
	evaList: [{
			src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '楼上说的好有道理。'
		}
	]
}
const shareList = [{
		type: 1,
		icon: '/static/temp/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	},
	{
		type: 4,
		icon: '/static/temp/share_qqzone.png',
		text: 'QQ空间'
	}
]
const lazyLoadList = [{
		src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
	},
	{
		src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
	},
	{
		src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg'
	},
	{
		src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg'
	},
	{
		src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg'
	},
	{
		src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg'
	},
	{
		src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg'
	},
	{
		src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg'
	},
	{
		src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg'
	},
	{
		src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg'
	},
	{
		src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg'
	},
	{
		src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg'
	},
	{
		src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg'
	},
	{
		src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg'
	},
	{
		src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg'
	},
	{
		src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg'
	},
]

const orderList = [{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			}
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 9,
		goodsList: [{
			title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
			price: 179.5,
			image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
			number: 1,
			attr: '珊瑚粉 M'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2120460599/O1CN01LBPS4C1GINkwsOTXS_!!2120460599.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/i2/1069876356/TB2ocTQG4WYBuNjy1zkXXXGGpXa_!!1069876356.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2120460599/O1CN01YsmgwZ1GINkv38rkn_!!2120460599.jpg_430x430q90.jpg',
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
			title: '回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女',
			price: 69,
			image: 'https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg',
			number: 1,
			attr: '白色-高帮 39'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3358098495/O1CN01dhYyid2Ccl5MWLDok_!!3358098495.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3358098495/O1CN01AWsnFA2Ccl5OzvqsL_!!3358098495.jpg_430x430q90.jpg',
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/i4/3470687433/O1CN0124mMQOSERr18L1h_!!3470687433.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/i3/2888462616/O1CN01ERra5J1VCAbZaKI5n_!!0-item_pic.jpg_430x430q90.jpg',
			},
			{
				image: 'https://gd3.alicdn.com/imgextra/i3/819381730/O1CN01YV4mXj1OeNhQIhQlh_!!819381730.jpg_400x400.jpg',
			},
		]
	}

]
const cateList = [{
		id: 1,
		name: 'A'
	},
	{
		id: 2,
		name: 'B'
	},
	{
		id: 3,
		name: 'C'
	},
	{
		id: 4,
		name: 'D'
	},
	{
		id: 5,
		pid: 1,
		name: '奥迪'
	},
	{
		id: 6,
		pid: 2,
		name: '宝马'
	},
	{
		id: 8,
		pid: 3,
		name: '卡罗拉',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 9,
		pid: 4,
		name: '大众',
		picture: '/static/temp/cate3.jpg'
	},
]

const cateList1 = [{
		id: 1,
		name: '交易状态'
	},
	{
		id: 2,
		name: '库存状态'
	},
	{
		id: 3,
		name: '采购类型'
	},
	{
		id: 4,
		pid: 1,
		name: '在售'
	},
	{
		id: 5,
		pid: 1,
		name: '已预定'
	},
	{
		id: 6,
		pid: 1,
		name: '退库'
	},
	{
		id: 7,
		pid: 1,
		name: '已售'
	},
	{
		id: 8,
		pid: 2,
		name: '不限'
	},
	{
		id: 9,
		pid: 2,
		name: '在途'
	},
	{
		id: 10,
		pid: 2,
		name: '整备中'
	},
	{
		id: 11,
		pid: 2,
		name: '在厅'
	},
	{
		id:12,
		pid: 2,
		name: '网络在售'
	},
	{
		id: 13,
		pid: 2,
		name: '转场'
	},
	{
		id:14,
		pid: 2,
		name: '外借'
	},
	{
		id:15,
		pid: 3,
		name: '不限'
	},
	{
		id:16,
		pid: 3,
		name: '收购'
	},
	{
		id:17,
		pid: 3,
		name: '网络寄售'
	},
	{
		id:18,
		pid: 3,
		name: '实车寄售'
	},
	{
		id:19,
		pid: 3,
		name: '合作'
	},
	{
		id:20,
		pid: 3,
		name: '置换'
	},
]

const cateList2 = [{
		id: 1,
		name: '全部'
	},
	{
		id: 2,
		pid: 1,
		name: '在库天数最短'
	},
	{
		id: 3,
		pid: 1,
		name: '在库天数最长'
	},
	{
		id: 4,
		pid: 1,
		name: '标价最低'
	},
	{
		id: 5,
		pid: 1,
		name: '标价最高'
	},
	{
		id: 6,
		pid: 1,
		name: '车龄最短'
	},
	{
		id: 7,
		pid: 1,
		name: '里程最少'
	},
]

const cateList3 = [{
		id: 1,
		name: '全部'
	},
	{
		id: 2,
		pid: 1,
		name: '网络渠道'
	},
	{
		id: 3,
		pid: 1,
		name: '线下渠道'
	},
	{
		id: 4,
		pid: 1,
		name: '老客户介绍'
	},
	{
		id: 5,
		pid: 1,
		name: '其他'
	}
]
const cateList4 = [{
		id: 1,
		name: '全部'
	},
	{
		id: 2,
		pid: 1,
		name: '待跟进'
	},
	{
		id: 3,
		pid: 1,
		name: '跟进中'
	},
	{
		id: 4,
		pid: 1,
		name: '已成交'
	},
	{
		id: 5,
		pid: 1,
		name: '已完成'
	},
	{
		id: 5,
		pid: 1,
		name: '已战败'
	},
	{
		id: 5,
		pid: 1,
		name: '已失效'
	}
]
const cateList5 = [{
		id: 1,
		name: '最新跟进'
	},
	{
		id: 2,
		pid: 1,
		name: '最新创建'
	},
	{
		id: 3,
		pid: 1,
		name: '名称排序'
	}
]
const cateList6 = [{
		id: 1,
		name: '全部'
	},
	{
		id: 2,
		pid:1,
		name: '生日提醒未处理'
	},
	{
		id: 3,
		pid:1,
		name: '生日提醒已处理'
	}
]
const cateList7 = [{
		id: 4,
		name: '全部'
	},
	{
		id: 5,
		pid:4,
		name: '保险临险未处理'
	},
	{
		id: 6,
		pid:4,
		name: '保险临险已处理'
	}
]
const cateList8 = [{
		id: 7,
		name: '全部'
	},
	{
		id: 8,
		pid:7,
		name: '年检临险未处理'
	},
	{
		id: 9,
		pid:7,
		name: '年检临险已处理'
	}
]


export default {
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList,
	cateList1,
	cateList2,
	cateList3,
	cateList4,
	cateList5,
	cateList6,
	cateList7,
	cateList8
}
