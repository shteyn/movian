import React /* {Component} */ from "react";

import {
    FormGroup,
    Label,
    Input
} from "reactstrap";


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };

    };

    updateSearch(e) {
        this.setState({search: e.target.value/* .substring(0, 7) */});
        this.props.searchChanged(e.target.value)
    }

    render() {
        return (
            <div className="divSearch">
                <FormGroup className="inputCont">
                    <Input
                        type="text"
                        value={this.state.search}
                        name="text" id="searching"
                        placeholder="Search..."
                        onChange={this.updateSearch.bind(this)}
                    />
                </FormGroup>
            </div>
        );
    }
}

export default Search;