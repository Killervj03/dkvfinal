import React from 'react'
import { Grid ,Button} from 'semantic-ui-react'

function Footer() {
  return (
    <div>
           
                <footer>
                  <center>
                  <div className="footer">
 
 <Grid className='App'>
 
 <Grid.Row>
   <Grid.Column width={9}>
  
     <p> <h3> DKV Sangam-Keelkattalai </h3> </p> Copyright @ 2022
     </Grid.Column>
     <Grid.Column margin ="right">
     <p>    <Button circular color='google plus' icon='google plus' /> </p>
     </Grid.Column>
     <Grid.Column>
     <p><Button circular color='facebook' icon='facebook' /></p>
     </Grid.Column>
     <Grid.Column>
     <p>   <Button circular color='linkedin' icon='linkedin' /> </p>  
   </Grid.Column>
   <Grid.Column>
     <p>  <Button circular color='twitter' icon='twitter' /></p>
     </Grid.Column>  </Grid.Row>
     <Grid.Row> <Grid.Column width={6}></Grid.Column>
      <Grid.Column textAlign='left' width={15}>
                    <h5 >VISKAMNIX Technologies Traninig and Consulting Services Pvt. Ltd.| Chennai</h5>

               </Grid.Column> </Grid.Row>
 
  
 
   </Grid>
  
   </div>
    
                </center>
                </footer>
    </div>
  )
}

export default Footer