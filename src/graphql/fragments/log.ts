/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const QueryBrowserErrorLogs = {
  variable: "$condition: BrowserErrorLogQueryCondition",
  query: `
    queryBrowserErrorLogs(condition: $condition) {
        logs {
           message
           service
           serviceVersion
           time
           pagePath
           category
           errorUrl
           stack
           grade
        }
    }`,
};

export const QueryServiceLogs = {
  variable: "$condition: LogQueryCondition",
  query: `
    queryLogs(condition: $condition) {
        logs {
          serviceName
          serviceId
          serviceInstanceName
          serviceInstanceId
          endpointName
          endpointId
          traceId
          timestamp
          contentType
          content
          tags {
            key
            value
          }
        }
    }`,
};

export const QueryLogsByKeywords = {
  variable: "",
  query: `
  support: supportQueryLogsByKeywords`,
};

export const LogTagKeys = {
  variable: "$duration: Duration!",
  query: `
  tagKeys: queryLogTagAutocompleteKeys(duration: $duration)`,
};

export const LogTagValues = {
  variable: "$tagKey: String!, $duration: Duration!",
  query: `
  tagValues: queryLogTagAutocompleteValues(tagKey: $tagKey, duration: $duration)`,
};
