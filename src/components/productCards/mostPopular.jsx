import React from 'react'
import './pages.scss'

export default class MostPopularProductCard extends React.Component { 
    
    state = {
        loading: true,
        shoe: null,
      }
    
      async componentDidMount(){
        const response = await fetch('http://localhost:5000/mostpopular');
        const data = await response.json()
        this.setState({shoe: data, loading: false});
      }
      render(){
        return(  <div>
        <div>
<div style={{textAlign:'center',fontFamily: 'Times New Roman', paddingTop:'4vh'}}>
<h1><span style={{color:'rgb(69, 146, 177)', borderBottom:'4px solid rgb(69, 146, 177)'}}>Most Popular</span> </h1>
</div>
</div>
        <div className='CardListWrapper'>
   
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[0].name}</b>  </div> <br/>
           <img src={this.state.shoe[0].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[0].color}</div>
               <div><b>Price:</b>  {this.state.shoe[0].retail_price}</div>
               <br/>
            <a href={this.state.shoe[0].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[1].name}</b>  </div> <br/>
           <img src={this.state.shoe[1].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[1].color}</div>
               <div><b>Price:</b>  {this.state.shoe[1].retail_price}</div>
               <br/>
               <a href={this.state.shoe[1].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[2].name}</b>  </div> <br/>
           <img src={this.state.shoe[2].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[2].color}</div>
               <div><b>Price:</b>  {this.state.shoe[2].retail_price}</div>
               <br/>
               <a href={this.state.shoe[2].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[3].name}</b>  </div> <br/>
           <img src={this.state.shoe[3].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[3].color}</div>
               <div><b>Price:</b>  {this.state.shoe[3].retail_price}</div>
               <br/>
               <a href={this.state.shoe[3].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[4].name}</b>  </div> <br/>
           <img src={this.state.shoe[4].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[4].color}</div>
               <div><b>Price:</b>  {this.state.shoe[4].retail_price}</div>
               <br/>
               <a href={this.state.shoe[4].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[5].name}</b>  </div> <br/>
           <img src={this.state.shoe[5].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[5].color}</div>
               <div><b>Price:</b>  {this.state.shoe[5].retail_price}</div>
               <br/>
               <a href={this.state.shoe[5].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[6].name}</b>  </div> <br/>
           <img src={this.state.shoe[6].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[6].color}</div>
               <div><b>Price:</b>  {this.state.shoe[6].retail_price}</div>
               <br/>
               <a href={this.state.shoe[6].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[7].name}</b>  </div> <br/>
           <img src={this.state.shoe[7].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[7].color}</div>
               <div><b>Price:</b>  {this.state.shoe[7].retail_price}</div>
               <br/>
               <a href={this.state.shoe[7].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[8].name}</b>  </div> <br/>
           <img src={this.state.shoe[8].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[8].color}</div>
               <div><b>Price:</b>  {this.state.shoe[8].retail_price}</div>
               <br/>
               <a href={this.state.shoe[8].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   <div className='cardWrapper'>
        { this.state.loading || !this.state.shoe ? (
        <div>loading...</div>
        ) : (
        <div> 
           <div className='m3'>
           <div> <b>{this.state.shoe[9].name}</b>  </div> <br/>
           <img src={this.state.shoe[9].img}></img>
               <div><b>Colorway:</b>  {this.state.shoe[9].color}</div>
               <div><b>Price:</b>  {this.state.shoe[9].retail_price}</div>
               <br/>
               <a href={this.state.shoe[9].link}>
                       <button>BUY</button>
            </a> 
           </div>
        </div>
        )}
      
       </div>
   
   
   
         </div>
   </div>)}}

