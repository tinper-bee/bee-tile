/**
*
* @title Tile实例
* @description 通过style自定力样式，Tile的children均可自定义。
*
*/
class Demo1 extends Component {
	render () {
		return (
			<div>
			<Tile hoverColors="primary" style={{width:200}}>
				<h4>磁铁标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
			<Tile hoverColors="danger" style={{width:200}}>
				<h4>磁铁标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
			<Tile hoverColors="warning" style={{width:200}}>
				<h4>磁铁标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
			<Tile hoverColors="success" style={{width:200}}>
				<h4>磁铁标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
			<Tile hoverColors="info" style={{width:200}}>
				<h4>磁铁标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
			</div>
		)	
	}
}