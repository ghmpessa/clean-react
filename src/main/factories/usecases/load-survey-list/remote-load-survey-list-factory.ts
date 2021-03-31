import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'
import { LoadSurveyList } from '@/domain/usecases'
import { makeApiUrl } from '../../http/api-url-factory'
import { RemoteLoadSurveyList } from '@/data/usecases/load-survey-list/remote-load-survey-list'

export const makeRemoteLoadSurveyList = (): LoadSurveyList => {
  return new RemoteLoadSurveyList(makeApiUrl('/surveys'), makeAxiosHttpClient())
}
