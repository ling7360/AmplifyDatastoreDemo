import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  ACCEPTED = "ACCEPTED",
  DECLINED_BY_RESTAURANT = "DECLINED_BY_RESTAURANT"
}

export enum TransportationModes {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING"
}



type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total?: number | null;
  readonly status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly OrderDishes?: (OrderDish | null)[] | null;
  readonly Courier?: Courier | null;
  readonly userID: string;
  readonly Restaurant?: Restaurant | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderCourierId?: string | null;
  readonly orderRestaurantId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total?: number | null;
  readonly status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly OrderDishes: AsyncCollection<OrderDish>;
  readonly Courier: AsyncItem<Courier | undefined>;
  readonly userID: string;
  readonly Restaurant: AsyncItem<Restaurant | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderCourierId?: string | null;
  readonly orderRestaurantId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly orderID: string;
  readonly dishes?: Dish | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishDishesId?: string | null;
}

type LazyOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly orderID: string;
  readonly dishes: AsyncItem<Dish | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishDishesId?: string | null;
}

export declare type OrderDish = LazyLoading extends LazyLoadingDisabled ? EagerOrderDish : LazyOrderDish

export declare const OrderDish: (new (init: ModelInit<OrderDish>) => OrderDish) & {
  copyOf(source: OrderDish, mutator: (draft: MutableModel<OrderDish>) => MutableModel<OrderDish> | void): OrderDish;
}

type EagerDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly restaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly restaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dish = LazyLoading extends LazyLoadingDisabled ? EagerDish : LazyDish

export declare const Dish: (new (init: ModelInit<Dish>) => Dish) & {
  copyOf(source: Dish, mutator: (draft: MutableModel<Dish>) => MutableModel<Dish> | void): Dish;
}

type EagerCourier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sub?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly transportationMode?: TransportationModes | keyof typeof TransportationModes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sub?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly transportationMode?: TransportationModes | keyof typeof TransportationModes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Courier = LazyLoading extends LazyLoadingDisabled ? EagerCourier : LazyCourier

export declare const Courier: (new (init: ModelInit<Courier>) => Courier) & {
  copyOf(source: Courier, mutator: (draft: MutableModel<Courier>) => MutableModel<Courier> | void): Courier;
}

type EagerRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly deliveryFee?: number | null;
  readonly minDeliveryTime?: number | null;
  readonly maxDeliveryTime?: number | null;
  readonly rating?: number | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly Dishes?: (Dish | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly adminSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly deliveryFee?: number | null;
  readonly minDeliveryTime?: number | null;
  readonly maxDeliveryTime?: number | null;
  readonly rating?: number | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly Dishes: AsyncCollection<Dish>;
  readonly Baskets: AsyncCollection<Basket>;
  readonly adminSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurant = LazyLoading extends LazyLoadingDisabled ? EagerRestaurant : LazyRestaurant

export declare const Restaurant: (new (init: ModelInit<Restaurant>) => Restaurant) & {
  copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant>) => MutableModel<Restaurant> | void): Restaurant;
}

type EagerBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketDishes?: (BasketDish | null)[] | null;
  readonly restaurantID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketDishes: AsyncCollection<BasketDish>;
  readonly restaurantID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Basket = LazyLoading extends LazyLoadingDisabled ? EagerBasket : LazyBasket

export declare const Basket: (new (init: ModelInit<Basket>) => Basket) & {
  copyOf(source: Basket, mutator: (draft: MutableModel<Basket>) => MutableModel<Basket> | void): Basket;
}

type EagerBasketDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly basketID: string;
  readonly Dish?: Dish | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketDishDishId?: string | null;
}

type LazyBasketDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly basketID: string;
  readonly Dish: AsyncItem<Dish | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketDishDishId?: string | null;
}

export declare type BasketDish = LazyLoading extends LazyLoadingDisabled ? EagerBasketDish : LazyBasketDish

export declare const BasketDish: (new (init: ModelInit<BasketDish>) => BasketDish) & {
  copyOf(source: BasketDish, mutator: (draft: MutableModel<BasketDish>) => MutableModel<BasketDish> | void): BasketDish;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly sub?: string | null;
  readonly Orders?: (Order | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly sub?: string | null;
  readonly Orders: AsyncCollection<Order>;
  readonly Baskets: AsyncCollection<Basket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}