import React, { Component,Fragment } from 'react'
import { Http } from '../../helpers/Http'


export class ListMusic extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       musics: []
    }
  }

  async componentDidMount(){
    const musics = await Http.get('/musics')
    this.setState({musics: musics.data.musics})
    
  }
  



  render() {
    const { musics  }= this.state;
    const showListMusics = musics.length == 0  ? ('loading') 
    :
    musics.map((val,index)=>(
      <tr key={index}>
        <td>{val.id}</td>
        <td>{val.title}</td>
        <td>{val.description}</td>
        <td><button>Update</button></td>
        <td><button>Delete</button></td>
      </tr>
    ))
    
    return (
      <Fragment>
        <div>
        <h1>List of Music</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {showListMusics}
          </tbody>
        </table>
      </div>
      </Fragment>
    )
  }
}

export default ListMusic
