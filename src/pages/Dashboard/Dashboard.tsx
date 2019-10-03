import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,
    IonButton,  IonCard, IonCardHeader, IonCardSubtitle,  IonCardContent, IonLabel } from '@ionic/react';
 import React from 'react';
 
 
 const Dashboard: React.FC = () => {
 
   return (
     <IonPage>
       <IonHeader>
         <IonToolbar>
           <IonTitle>Wedding planner</IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonContent className="ion-padding"fullscreen>
           <IonCard>
                 <IonCardHeader>
                   <IonCardSubtitle>Sign Up</IonCardSubtitle>
                 </IonCardHeader>
                       <IonCardContent>
                          <IonItem>
                            <IonInput placeholder="Firstname"></IonInput>
                          </IonItem>
    
                          <IonItem>
                            <IonInput placeholder="Lastname"></IonInput>
                          </IonItem>

                          <IonItem>
                            <IonInput placeholder="Email: info@example.com"></IonInput>
                          </IonItem>

                          <IonItem>
                            <IonInput placeholder="New Password"></IonInput>
                          </IonItem>


                          <IonItem>
                            <IonInput placeholder="Confirm Password"></IonInput>
                          </IonItem>

                          <IonButton expand="block">Sign Up</IonButton>
                          <IonLabel color="primary">Already have account? Login</IonLabel>
                    </IonCardContent>
           </IonCard>
       </IonContent>
     </IonPage>
     );
 };
 
 export default Dashboard;
 