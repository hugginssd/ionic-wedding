import { IonLoading, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,
   IonButton,  IonCard, IonCardHeader, IonCardSubtitle,  IonCardContent, IonLabel } from '@ionic/react';
import React , { useState } from 'react';


const Login: React.FC = () => {

  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 2000);



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

                      <IonButton expand="block"  onClick={() => setShowLoading(true)}>Sign In</IonButton>
                      <IonLoading
                          isOpen={showLoading}
                          onDidDismiss={() => setShowLoading(false)}
                          message={'Loading...'}
                          duration={5000}
                      />
                      <IonLabel color="primary">Forgot password?</IonLabel>
                      </IonCardContent>
          </IonCard>
      </IonContent>
    </IonPage>
    );
};

export default Login;
