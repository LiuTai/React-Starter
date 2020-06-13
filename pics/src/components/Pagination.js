import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.currentPage
    };
  }
  goToPage(num) {
    this.setState({ currentPage: num });
    this.props.goToPage(this.props.term, num);
  }

  render() {
    const pageTotal = Math.ceil(this.props.total / this.props.per_page);
    return (
      <section>
        <div>
          <button onClick={() => this.goToPage(this.state.currentPage - 1)}>
            Previous
          </button>
          <input type="text" value={this.state.currentPage} />
          <span>/{pageTotal}</span>
          <button onClick={() => this.goToPage(this.state.currentPage + 1)}>
            Next
          </button>
        </div>
      </section>
    );
  }
}

export default Pagination;
