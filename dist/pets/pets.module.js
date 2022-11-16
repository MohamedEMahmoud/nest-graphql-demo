"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsModule = void 0;
const owner_module_1 = require("./../owner/owner.module");
const pet_entity_1 = require("./entities/pet.entity");
const common_1 = require("@nestjs/common");
const pets_service_1 = require("./pets.service");
const pets_resolver_1 = require("./pets.resolver");
const typeorm_1 = require("@nestjs/typeorm");
let PetsModule = class PetsModule {
};
PetsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pet_entity_1.Pet]), owner_module_1.OwnerModule],
        providers: [pets_resolver_1.PetsResolver, pets_service_1.PetsService],
    })
], PetsModule);
exports.PetsModule = PetsModule;
//# sourceMappingURL=pets.module.js.map