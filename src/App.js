import { Layout, Image } from 'antd';
import SideMenu from './assets/components/SideMenu/SideMenu';
import AppRoutes from './assets/components/AppRoutes/AppRoutes';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify} from 'aws-amplify';
import awsConfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { React } from 'react';
import AuthCheck from './modules/AuthCheck';

const { Sider, Content, Footer } = Layout;

const dataStoreConfig = {
  syncExpressions: [/* ... */],
  fullSyncInterval: 60000,
  deltaSyncInterval: 5000,
  errorHandler: (e) => { /* ... */ },
  optimisticConcurrency: true,
  LazyLoadingDisabled: true,
  eagerLoadingEnabled: true, // enable eager loading
};

Amplify.configure({
  ...awsConfig,
  DataStore: dataStoreConfig,
});

function App() {

  return (
    <Provider store={store}>
      <AuthCheck>
        <Layout>
          <Sider style={{ minHeight: "100vh", backgroundColor: 'white' }}>
            <Image
              src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo-700x394.png"
              preview={false}
              style={{ padding: '0 4px' }}
            />
            <SideMenu />
          </Sider>
          <Layout>
            <Content>
              <AppRoutes />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ubet Eats Restaurant Dashboard ©2023
            </Footer>
          </Layout>
        </Layout >
      </AuthCheck>
    </Provider>
  );
}

export default withAuthenticator(App);
