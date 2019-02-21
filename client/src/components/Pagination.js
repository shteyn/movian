import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    films: PropTypes.array,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
};

const defaultProps = {
    initialPage: 1,
    pageSize: 16
};

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.films && this.props.films.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.films !== prevProps.films) {
            this.setPage(this.props.initialPage);

        }
    }

    setPage(page) {
        let { films, pageSize } = this.props;
        let pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(films.length, page, pageSize);

        // get new page of items from items array
        let pageOfFilms = films.slice(pager.startIndex, pager.endIndex + 1);

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(pageOfFilms);
    }

    getPager(totalFilms, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 16;

        // calculate total pages
        let totalPages = Math.ceil(totalFilms / pageSize);

        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalFilms - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalFilms: totalFilms,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        let pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <div className="pagination">
                <div className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <button className="ui-box backwardBorderTrain" onClick={() => this.setPage(1)}><span className="ui-border-element">First</span></button>
                </div>
                <div className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <button className="ui-box backwardBorderTrain" onClick={() => this.setPage(pager.currentPage - 1)}><span className="ui-border-element">&larr; Previous</span></button>
                </div>
                {pager.pages.map((page, index) =>
                    <div key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <button className="ui-box backwardBorderTrain" onClick={() => this.setPage(page)}><span className="ui-border-element">{page}</span></button>
                    </div>
                )}
                <div className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <button className="ui-box backwardBorderTrain" onClick={() => this.setPage(pager.currentPage + 1)}><span className="ui-border-element">Next &rarr;</span></button>
                </div>
                <div className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <button className="ui-box backwardBorderTrain" onClick={() => this.setPage(pager.totalPages)}><span className="ui-border-element">Last</span></button>
                </div>
            </div>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;