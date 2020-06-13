import React from "react";
import SearchBar from "./SearchBar"
import unsplash from '../api/unsplash'
import ImageList from './ImageList'
import Pagination from './Pagination'

class App extends React.Component {

  state = { 
    images: [],
    total: 0,
    page: 1,
    per_page: 20,
    term: ''
  }

  onSearchSubmit = async (term, page=1) => {
    const response = await unsplash.get('/search/photos', {
      params: { 
        query: term,
        page,
        per_page: this.state.per_page,
        order_by: 'latest',
      }
    })
    this.setState({
      images: response.data.results,
      total: response.data.total,
      term
    })
    console.log(response)
  };

  render() {
    return (
      <div className="UI container" style={{ marginTop: "10px" }}>
         <SearchBar onSubmit={this.onSearchSubmit}/> 
         Found {this.state.total} images
         <ImageList images={this.state.images}/>
         <Pagination 
          total={this.state.total} 
          per_page = {this.state.per_page}
          currentPage = {this.state.page}
          term = {this.state.term}
          goToPage = { (term, page) => this.onSearchSubmit(term, page)}
          />
      </div>
    )
  }
};

export default App;
