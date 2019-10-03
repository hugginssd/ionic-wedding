import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,
   IonButton,  IonCard, IonCardHeader, IonCardSubtitle,  IonCardContent, IonLabel } from '@ionic/react';
import React from 'react';


const Login: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wedding planner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
          <IonCard>
              
                <IonCardHeader>
                  <IonCardSubtitle>Sign In</IonCardSubtitle>
                </IonCardHeader>

                      <IonCardContent>
                      <IonItem>
                        <IonInput color="light" placeholder="Username"></IonInput>
                      </IonItem>

                      <IonItem>
                        <IonInput color="light" placeholder="Password"></IonInput>
                      </IonItem>

                      <IonButton expand="block">Sign In</IonButton>
                      <IonLabel color="primary">Forgot password?</IonLabel>
                      </IonCardContent>

          </IonCard>
      </IonContent>
    </IonPage>
    );
};

export default Login;
