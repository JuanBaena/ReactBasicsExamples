import React, {Component} from 'react';
class IndividualArticle extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <tr data-testid="article" key="article-index">
                <td data-testid="article-title">{this.props.article.title}</td>
                <td data-testid="article-upvotes">{this.props.article.upvotes}</td>
                <td data-testid="article-date">{this.props.article.date}</td>
            </tr>
        );
    }
}
 
export default IndividualArticle;