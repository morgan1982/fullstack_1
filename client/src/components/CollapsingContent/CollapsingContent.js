import React, { Component } from 'react';





class CollapsingContent extends Component {

    state = {
        isExpanded: false,
        counter: 0,
        height: null
    }



    handleToggle = (e) => {
        e.preventDefault();

        this.setState((prevState) => {
            return {
                isExpanded:  !prevState.isExpanded,
                height: this.refs.inner.clientHeight
            }
        })
    }

    render () {

        const { isExpanded, height } = this.state;
        const expander = `panel ${isExpanded ? 'is-expanded' : ''}`

        const currentHeight = isExpanded ? height : 0;

        return (
            <div className={expander}
                 onClick={this.handleToggle}>
                 <div className="panel-heading">
                     <h2>{this.props.title}</h2>
                 </div>
                 <div className="panel-collapse"
                      style={{ height: currentHeight + 'px' }}>
                     <div className="panel-body" ref="inner">
                         {this.props.children}
                     </div>
                 </div>
            </div>
            )
    }
}



export default CollapsingContent;
