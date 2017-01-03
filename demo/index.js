
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
			<div>
			<Tile style={{width:200}}>
				<h4>磁贴标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
			</div>
		)	
	}
}var DemoArray = [{"example":<Demo1 />,"title":" Tile实例","code":"/**\n*\n* @title Tile实例\n* @description 通过style自定力样式，Tile的children均可自定义。hoverColors设置磁铁hover的效果\n*\n*/\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div>\n\t\t\t<Tile style={{width:200}}>\n\t\t\t\t<h4>磁贴标题</h4>\n\t\t\t\t<span>进度</span>\n\t\t\t\t<h1>95%</h1>\n\t\t\t</Tile>\n\t\t\t</div>\n\t\t)\t\n\t}\n}","desc":" 通过style自定力样式，Tile的children均可自定义。hoverColors设置磁铁hover的效果"}]


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
