import React from 'react';

class ThemeEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            primary: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
            secondary: getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim(),
            accent: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(),
            altAccent: getComputedStyle(document.documentElement).getPropertyValue('--alt-accent').trim(),
            text: getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
            altText: getComputedStyle(document.documentElement).getPropertyValue('--alt-text').trim()
        }
    }

    changeColor(event){
        this.setState({[event.target.name]: event.target.value});
    }

    reload(){
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    refreshTheme(event){
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
        document.documentElement.style.setProperty('--primary',this.state.primary);
        document.documentElement.style.setProperty('--secondary',this.state.secondary);
        document.documentElement.style.setProperty('--text',this.state.text);
        document.documentElement.style.setProperty('--alt-text',this.state.altText);
        document.documentElement.style.setProperty('--accent',this.state.accent);
        document.documentElement.style.setProperty('--alt-accent',this.state.altAccent);
    }

    render(){
        return (
            <div className="theme">
                <button className="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#themeModal" aria-label="Theme button"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M1 12.155c2.256 3.97 4.55 7.918 6.879 11.845h-5.379c-.829 0-1.5-.675-1.5-1.5v-10.345zm2.85.859c3.278 1.952 12.866 7.658 13.121 7.805l-5.162 2.98c-.231.132-.49.201-.751.201-.549 0-1.037-.298-1.299-.75l-5.909-10.236zm1.9-12.813c-.23-.133-.489-.201-.75-.201-.524 0-1.026.277-1.299.75l-3.5 6.062c-.133.23-.201.489-.201.749 0 .527.278 1.028.75 1.3 2.936 1.695 14.58 8.7 17.516 10.396.718.413 1.633.168 2.048-.55l3.5-6.062c.133-.23.186-.488.186-.749 0-.52-.257-1.025-.734-1.3l-17.516-10.395m.25 3.944c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2"/></svg></button>
                <div className="modal" id="themeModal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Configure Theme</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onReset={this.reload} onSubmit={this.refreshTheme.bind(this)}>
                                <div className="mb-3 d-flex justify-content-between">
                                    <label htmlFor="primary" className="form-label">Primay Color: {this.state.primary}</label>
                                    <input type="color" className="form-control form-control-color" name="primary" value={this.state.primary} onChange={this.changeColor.bind(this)}/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <label htmlFor="secondary" className="form-label">Secondary Color: {this.state.secondary}<br/></label>
                                    <input type="color" name="secondary" className="form-control form-control-color" value={this.state.secondary} onChange={this.changeColor.bind(this)}/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <label htmlFor="accent" className="form-label">Accent: {this.state.accent}</label>
                                    <input type="color" name="accent" className="form-control form-control-color" value={this.state.accent} onChange={this.changeColor.bind(this)}/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <label htmlFor="altAccent" className="form-label">Alternate Accent: {this.state.altAccent}</label>
                                    <input type="color" name="altAccent" className="form-control form-control-color" value={this.state.altAccent} onChange={this.changeColor.bind(this)}/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <label htmlFor="text" className="form-label">Text: {this.state.text}</label>
                                    <input type="color" name="text" className="form-control form-control-color" value={this.state.text} onChange={this.changeColor.bind(this)}/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <label htmlFor="altText" className="form-label">Alternate Text: {this.state.altText}</label>
                                    <input type="color" name="altText" className="form-control form-control-color" value={this.state.altText} onChange={this.changeColor.bind(this)}/>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                    <button type="reset" className="btn btn-secondary">Reset</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThemeEditor;