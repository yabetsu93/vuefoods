<template>
  <div>
    <v-container fluid>
      <h2 align="center">Foods</h2>
      <v-row>
        <v-btn>Add new Food</v-btn> <br />
        <v-btn>Reset Food Items</v-btn>
      </v-row>
      <v-container fluid flex>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
              <th class="text-left">Fat</th>
              <th class="text-left">Carbs</th>
              <th class="text-left">Edit</th>
              <th class="text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in aDatas" :key="item.index">
              <td>{{ (item.index = index) }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.fat }}</td>
              <td>{{ item.carbs }}</td>
              <td>
                <v-btn
                  class="ma-2"
                  tile
                  color="success"
                  @click.stop="editRecordDialog(item, index)"
                >
                   <v-icon left>mdi-pencil</v-icon>Edit
                </v-btn>
              </td>
              <td>
                <v-btn
                  class="ma-2"
                  tile
                  color="warning"
                  @click.stop="deleteRecordDialog(item, index)"
                >
                  <v-icon>mdi-delete</v-icon>Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-container>
      <v-row justify="center">
        <v-dialog v-model="dialogDelete" persistent max-width="400">
          <v-card :items="foodDetail">
            <v-card-title class="headline"
              >Would you like to delete the record?</v-card-title
            >
            <v-card-text
              >By deleting this record means no longer be retrieved is this
              ok?</v-card-text>
                <v-form class="left-margin">
                <v-container>
                  <v-row>
                  <v-col cols="3" sm="3">
                      <v-text-field
                        v-model="foodDetail.name"
                        label="Name"
                        outlined
                        disabled
                      ></v-text-field>
                  </v-col>
                 <v-col cols="3" sm="3">
                      <v-text-field
                        v-model="foodDetail.calories"
                        label="Calories"
                        outlined
                        disabled
                      ></v-text-field>
                  </v-col> 
                  </v-row>
                  <v-row>
                     <v-col cols="3" sm="3">
                      <v-text-field
                        v-model="foodDetail.fat"
                        label="Fat"
                        outlined
                        disabled
                      ></v-text-field>
                  </v-col>
                  <v-col cols="3" sm="3">
                      <v-text-field
                        v-model="foodDetail.carbs"
                        label="Carbs"
                        outlined
                        disabled
                      ></v-text-field>
                  </v-col>
                  </v-row>
                </v-container>
              </v-form>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="green darken-1" text @click="dialogDelete = false"
                >No</v-btn
              >
              <v-btn
                color="green darken-1"
                text
                @click="deleteSelectedRecord(foodDetail.index)"
                >Yes</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialogEdit" persistent max-width="400">
          <v-card :items="foodDetail">
            <v-card-title class="headline">Update Food Record</v-card-title>
            <v-card-text>Update the content of your favorite food.</v-card-text>
              <v-form class="left-margin">
                <v-container>
                  <v-row>
                  <v-col cols="3" sm="3">
                      <v-text-field
                        v-model="foodDetail.name"
                        label="Name"
                        outlined
                      ></v-text-field>
                  </v-col>
                 <v-col cols="3" sm="3">
                      <v-text-field
                        v-model="foodDetail.calories"
                        label="Calories"
                        outlined
                      ></v-text-field>
                  </v-col> 
                  </v-row>
                  <v-row>
                     <v-col cols="3" sm="3">
                      <v-text-field
                        v-model="foodDetail.fat"
                        label="Fat"
                        outlined
                      ></v-text-field>
                  </v-col>
                  <v-col cols="3" sm="3">
                      <v-text-field
                        v-model="foodDetail.carbs"
                        label="Carbs"
                        outlined
                      ></v-text-field>
                  </v-col>
                  </v-row>
                </v-container>
              </v-form>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn
                color="green darken-1"
                text
                @click.native="dialogEdit = false"
                >No</v-btn
              >
              <v-btn
                color="green darken-1"
                text
                @click.native="editSelectedRecord()"
                >Yes</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./FoodsList.ts" lang="ts"></script>
<style src="./FoodsList.scss" lang="scss"></style>
