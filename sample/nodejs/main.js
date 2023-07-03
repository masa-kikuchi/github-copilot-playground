// 指定されたフルーツの説明を返却する
module.exports = (fruit) => {   
    switch (fruit) {
        case 'apple':
            return 'りんごは赤い';
        case 'banana':
            return 'バナナは黄色い';
        case 'orange':
            return 'オレンジはオレンジ色';
        default:
            return 'そのフルーツはわかりません...';
    }
}