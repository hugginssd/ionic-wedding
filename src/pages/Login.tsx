import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
          <IonLabel className="ion-text-center">Sign In</IonLabel>

          
          <IonItem>
            <IonInput placeholder="Username"></IonInput>
          </IonItem>

         
         <IonItem>
           <IonInput placeholder="Password"></IonInput>
         </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Login;
