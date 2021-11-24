import React, {Component} from 'react';
import IndividualArticle from './IndividualArticle';

class Articles extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let articlesListSorted;

        if (!this.props.sortingMode.localeCompare("Upvoted")) {
            articlesListSorted = sortingListByUpvoted(this.props.articles);
        } else{
            articlesListSorted = sortingListByRecent(this.props.articles);
        }

        let listItems = articlesListSorted.map((article) =>
        <IndividualArticle article={article} />);

        return ( 
            <div className="card w-50 mx-auto">
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

function sortingListByUpvoted(articlesList) {
    return articlesList.sort(function(a, b) {
        return parseFloat(a.upvotes) - parseFloat(b.upvotes);
    });
}

function sortingListByRecent(articlesList) {
    return articlesList.sort(function(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
}
 
export default Articles;
