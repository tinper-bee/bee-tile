
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tile from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
*
* @title Tile实例
* @description 通过style自定力样式，Tile的children均可自定义。hoverColors设置磁铁hover的效果
*
*/
class Demo1 extends Component {
	render () {
		return (
			<Tile style={{width:200}}>
				<h4>磁贴标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
		)	
	}
}/**
*
* @title Tile 实例
* @description 具备链接功能，设置参数Component为a,且设置href为你的链接地址
*
*/
class Demo2 extends Component {
	render () {
		return (
			<Tile Component="a" href="baidu" style={{width:200}}>
				<h4>磁贴标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
		)	
	}
}var DemoArray = [{"example":<Demo1 />,"title":" Tile实例","code":"/**\n*\n* @title Tile实例\n* @description 通过style自定力样式，Tile的children均可自定义。hoverColors设置磁铁hover的效果\n*\n*/\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<Tile style={{width:200}}>\n\t\t\t\t<h4>磁贴标题</h4>\n\t\t\t\t<span>进度</span>\n\t\t\t\t<h1>95%</h1>\n\t\t\t</Tile>\n\t\t)\t\n\t}\n}","desc":" 通过style自定力样式，Tile的children均可自定义。hoverColors设置磁铁hover的效果"},{"example":<Demo2 />,"title":" Tile 实例","code":"/**\n*\n* @title Tile 实例\n* @description 具备链接功能，设置参数Component为a,且设置href为你的链接地址\n*\n*/\nclass Demo2 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<Tile Component=\"a\" href=\"baidu\" style={{width:200}}>\n\t\t\t\t<h4>磁贴标题</h4>\n\t\t\t\t<span>进度</span>\n\t\t\t\t<h1>95%</h1>\n\t\t\t</Tile>\n\t\t)\t\n\t}\n}","desc":" 具备链接功能，设置参数Component为a,且设置href为你的链接地址"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
