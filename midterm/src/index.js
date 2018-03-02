import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Panel from './Panel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
	<Panel />
	</div>, document.getElementById('root'));
registerServiceWorker();
