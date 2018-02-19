
import uiModules from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import template from './clusters.html';

uiRoutes.enable();
uiRoutes
    .when('/', {
        template,
        resolve: {
            currentTime($http) {
                return $http.get('../api/kibana_carrot2/clusters').then(function (resp) {
                    return resp.data.time;
                });
            }
        }
    });

uiModules
    .get('app/kibana_carrot2', [])
    .controller('kibana_carrot2', function ($scope, $route, $interval) {
        $scope.title = 'Clusters';
        $scope.description = 'Clusters';

        const currentTime = moment($route.current.locals.currentTime);
        $scope.currentTime = currentTime.format('HH:mm:ss');
        const unsubscribe = $interval(function () {
            $scope.currentTime = currentTime.add(1, 'second').format('HH:mm:ss');
        }, 1000);
        $scope.$watch('$destroy', unsubscribe);
    });