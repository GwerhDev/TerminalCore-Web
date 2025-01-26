/* import apps from '../../middlewares/misc/api.json';*/
import { Welcome } from '../components/Welcome';
/* import { ConnectedApps } from '../components/ConnectedApps';*/

export const LandingPage = () => {
  return (
    <div>
      <Welcome />
      {/*       <ConnectedApps apps={apps.apps} />*/}
    </div>
  )
}