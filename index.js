export default function (kibana) {

    return new kibana.Plugin({
        require: ['elasticsearch'],
        name: 'kibana_carrot2',
        uiExports: {
            app: {
                title: 'Clusters',
                description: 'This is a sample plugin to test using existing kibana visualizations',
                main: 'plugins/kibana_carrot2/clusters',
                uses: [  // these are needed if you need to show exiting kibana visualizations
                    'visTypes',
                    'visResponseHandlers',
                    'visRequestHandlers',
                    'visEditorTypes',
                    'savedObjectTypes',
                    'spyModes',
                    'fieldFormats',
                ],
                injectVars: (server) => {
                    return server.plugins.kibana.injectVars(server);
                }
            }
        }
    });
}