import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,
   IonButton,  IonCard, IonCardHeader, IonCardSubtitle,  IonCardContent } from '@ionic/react';
import React from 'react';


const Login: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wedding planner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonCard>
              
                <IonCardHeader>
                  <IonCardSubtitle>Sign In</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                <IonItem>
                  <IonInput placeholder="Username"></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput placeholder="Password"></IonInput>
                </IonItem>

                <IonButton>Sign In</IonButton>

                </IonCardContent>

          </IonCard>
      </IonContent>
    </IonPage>
    );
};

export default Login;
