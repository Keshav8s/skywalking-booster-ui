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

export const readFile = (event: any) => {
  return new Promise((resolve) => {
    const { files } = event.target;
    if (files.length < 1) {
      return;
    }
    const file = files[0];
    const reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      if (typeof this.result === "string") {
        resolve(JSON.parse(this.result));
      }
    };
  });
};
export const saveFile = (data: any, name: string) => {
  const newData = JSON.stringify(data);
  const tagA = document.createElement("a");
  tagA.download = name;
  tagA.style.display = "none";
  const blob = new Blob([newData]);
  tagA.href = URL.createObjectURL(blob);
  document.body.appendChild(tagA);
  tagA.click();
  document.body.removeChild(tagA);
};
