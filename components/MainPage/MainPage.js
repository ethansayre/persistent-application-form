import React from 'react';
import "./MainPage.css";
import Officer from '../Officer/Officer';
import Journalism from '../Journalism/Journalism';
import Policy from '../Policy/Policy';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "Home"
        };
    }
    
    get construction() {
        return (
        <div class="section">
            <div class="card">
                <div class="card-header">
                    <p class="card-header-title">Unipolitics</p>
                </div>
                <div class="card-content">
                    <article class="message is-warning">
                        <div class="message-body">
                            We are a student-run organization dedicated to advocating for political awareness, activism, and civic education called <a href="https://unipolitics.org">Unipolitics</a>.
                        </div>
                    </article>
                </div>
            </div>
        </div>);
    }

    render() {
        return(
            <div id="app">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />

                <nav className="nav has-shadow">
                    <div className="container">
                        <div className="nav-left">
                            <a className="nav-item">
                                <img src="unipoliticslogonew.png" />
                            </a>
                        </div>
                        <label htmlFor="menu-toggle" className="nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <input type="checkbox" id="menu-toggle" className="is-hidden" ref={ref => this.checkBox = ref} />
                        <div className="nav-right nav-menu">
                            <a onClick={() => {this.setState({active: "Home"}); this.checkBox.checked = false;}} className="nav-item is-tab is-hidden-tablet">
                                <span className="icon"><i className="fa fa-home"></i></span> Home
                            </a>
                            <a onClick={() => {this.setState({active: "Journalism"}); this.checkBox.checked = false;}} className="nav-item is-tab is-hidden-tablet">
                                <span className="icon"><i className="fa fa-comment"></i></span> Journalism
                            </a>
                            <a onClick={() => {this.setState({active: "Policy"}); this.checkBox.checked = false;}} className="nav-item is-tab is-hidden-tablet">
                                <span className="icon"><i className="fa fa-comment-alt"></i></span> Policy Solutions
                            </a>
                            {/* <a onClick={() => {this.setState({active: "About"}); this.checkBox.checked = false;}} className="nav-item is-tab is-hidden-tablet">
                                <span className="icon"><i className="fa fa-info"></i></span> About
                            </a> */}

                            <a className="nav-item is-tab is-active">
                                <span className="icon"><i className="fa fa-user"></i></span>{this.props.firebase.auth().currentUser.displayName}
                            </a>
                            <a onClick={this.props.logOutHandler} className="nav-item is-tab">
                                <span className="icon"><i className="fa fa-sign-out-alt"></i></span>
                            </a>
                        </div>
                    </div>
                </nav>

            <section className="main-content columns is-fullheight">

                <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
                    <p className="menu-label is-hidden-touch">Navigation</p>
                    <ul className="menu-list">
                        <li>
                            <a onClick={() => this.setState({active: "Home"})} className={this.state.active === "Home" ? "is-active" : ""}>
                                <span className="icon"><i className="fa fa-home"></i></span> Home
                            </a>
                        </li>
                        <li>
                            <a onClick={(e) => {e.preventDefault()}}>
                                <span className="icon"><i className="fa fa-table"></i></span> Submissions
                            </a>

                            <ul>
                                <li>
                                    <a onClick={() => this.setState({active: "Journalism"})} className={this.state.active === "Journalism" ? "is-active" : ""}>
                                        <span className="icon is-small"><i className="fa fa-comment"></i></span> Journalism
                                    </a>
                                    <a onClick={() => this.setState({active: "Policy"})} className={this.state.active === "Policy" ? "is-active" : ""}>
                                        <span className="icon is-small"><i className="fa fa-comment-alt"></i></span> Policy Solutions
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* <li>
                            <a onClick={() => this.setState({active: "About"})} className={this.state.active === "About" ? "is-active" : ""}>
                                <span className="icon"><i className="fa fa-info"></i></span> About
                            </a>
                        </li> */}
                    </ul>
                </aside>

                <div className="container column is-10">
                    {this.state.active === "Officer" ? <Officer firebase={this.props.firebase}/> : this.state.active === "Journalism" ? <Journalism firebase={this.props.firebase}/> : this.state.active === "Policy" ? <Policy firebase={this.props.firebase}/> : this.construction}
                </div>
            </section>

                {/* <footer className="footer is-hidden">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>Hello</p>
                        </div>
                    </div>
                </footer> */}

            </div>
        )
    }
};

export default MainPage;