/**
*
* @title Tile实例
* @description 通过style自定力样式，Tile的children均可自定义。
*
*/
class Demo1 extends Component {
	render () {
		return (
			<Tile style={{width:200}}>
				<h4>项目跟踪</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
		)	
	}
}