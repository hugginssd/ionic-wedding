import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel,
   IonButton, IonItemDivider, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import React from 'react';
import IonIcon from 'ionicons';
import styles from './style';
import withStyles from '@material-ui/core/styles/withStyles';


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
