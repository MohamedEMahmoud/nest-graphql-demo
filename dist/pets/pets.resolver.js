"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsResolver = void 0;
const owner_entity_1 = require("./../owner/entities/owner.entity");
const graphql_1 = require("@nestjs/graphql");
const pets_service_1 = require("./pets.service");
const pet_entity_1 = require("./entities/pet.entity");
const create_pet_input_1 = require("./dto/create-pet.input");
const update_pet_input_1 = require("./dto/update-pet.input");
let PetsResolver = class PetsResolver {
    constructor(petsService) {
        this.petsService = petsService;
    }
    createPet(createPetInput) {
        return this.petsService.create(createPetInput);
    }
    findAll() {
        return this.petsService.findAll();
    }
    findOne(id) {
        return this.petsService.findOne(id);
    }
    updatePet(updatePetInput) {
        return this.petsService.update(updatePetInput.id, updatePetInput);
    }
    removePet(id) {
        return this.petsService.remove(id);
    }
    ;
    owner(pet) {
        return this.petsService.getOwner(pet.ownerId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => pet_entity_1.Pet),
    __param(0, (0, graphql_1.Args)('createPetInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_input_1.CreatePetInput]),
    __metadata("design:returntype", void 0)
], PetsResolver.prototype, "createPet", null);
__decorate([
    (0, graphql_1.Query)(() => [pet_entity_1.Pet], { name: 'pets' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => pet_entity_1.Pet, { name: 'pet' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PetsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => pet_entity_1.Pet),
    __param(0, (0, graphql_1.Args)('updatePetInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_pet_input_1.UpdatePetInput]),
    __metadata("design:returntype", void 0)
], PetsResolver.prototype, "updatePet", null);
__decorate([
    (0, graphql_1.Mutation)(() => pet_entity_1.Pet),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PetsResolver.prototype, "removePet", null);
__decorate([
    (0, graphql_1.ResolveField)(returns => owner_entity_1.Owner),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pet_entity_1.Pet]),
    __metadata("design:returntype", void 0)
], PetsResolver.prototype, "owner", null);
PetsResolver = __decorate([
    (0, graphql_1.Resolver)(() => pet_entity_1.Pet),
    __metadata("design:paramtypes", [pets_service_1.PetsService])
], PetsResolver);
exports.PetsResolver = PetsResolver;
//# sourceMappingURL=pets.resolver.js.map